import * as React from 'react';
import { Tesseract } from 'tesseract.ts';
import { CONFIG } from '../../../../constants';
import { FFState } from '../../../../types';
import FFStep from './FFStep';
import {
  video as Video,
  canvas as Canvas,
  ffMain as FFMain,
  currentState as CurrentState,
  itemWrapper as ItemWrapper,
} from '../styles/FFPlay';

export interface Props {
  step: FFState;
  socket: SocketIOClient.Socket;
  forwardStep(): void;
  id: number;
}

export interface State {
  stream: any;
  temperature: number;
  restTime: number;
  measureCoordinateX: number;
  measureCoordinateY: number;
}

class FFPlay extends React.Component<Props, State> {
  private updateVideoInterval = null;
  private measureTempInterval = null;
  private mode0Interval = null;
  private mode1Interval = null;
  private mode2Interval = null;
  state = {
    stream: null,
    temperature: null,
    restTime: null,
    measureCoordinateX: 160,
    measureCoordinateY: 120,
  };

  clearIntervals = () => {
    clearInterval(this.measureTempInterval);
    clearInterval(this.updateVideoInterval);
    this.updateVideoInterval = null;
    this.measureTempInterval = null;
  }

  clearStepIntervals = () => {
    clearInterval(this.mode0Interval);
    clearInterval(this.mode1Interval);
    clearInterval(this.mode2Interval);
  }

  componentDidMount() {
    if (this.updateVideoInterval !== null) {
      this.clearIntervals();
    }
    this.setupCamera();
    this.startIntervals();
    this.playStep();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.clearStepIntervals();
      this.playStep();
    }
  }

  componentWillUnmount() {
    this.clearIntervals();
    this.clearStepIntervals();
  }

  startIntervals = () => {
    if (this.canvas !== undefined &&
        this.video !== undefined &&
        this.updateVideoInterval === null) {
      const ctx = this.canvas.getContext('2d');
      let min;
      let max;
      this.updateVideoInterval = setInterval(
        () => {
          if (this.video) {
            const { measureCoordinateX, measureCoordinateY } = this.state;
            ctx.drawImage(this.video, 0, 0, 320, 240);
            ctx.rect(measureCoordinateX - 5, measureCoordinateY - 5, 10, 10);
            ctx.stroke();
          }
        },
        1000 / 30,
      );
      this.measureTempInterval = setInterval(
        () => {
          const { measureCoordinateX, measureCoordinateY } = this.state;
          Tesseract.recognize(ctx.getImageData(280, 5, 35, 20), CONFIG)
            .then((result) => { max = parseInt(result.text.replace(/\r?\n/g, ''), 10) / 10; });
          Tesseract.recognize(ctx.getImageData(280, 215, 35, 20), CONFIG)
            .then((result) => { min = parseInt(result.text.replace(/\r?\n/g, ''), 10) / 10; });
          const color = ctx.getImageData(measureCoordinateX, measureCoordinateY, 1, 1).data[0];
          const temp = min + (max - min) / 255 * color;
          this.setState({ temperature: temp });
        },
        1000,
      );
    }
  }

  setupCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 320,
        height: 240, // FIXME
        // deviceId: {
        //   exact: 'c3a7a8e769ebb88af8946e975dc4dac275eb5e7d5b57ee2cd08091f1638798d2',
        // },
      }, audio: false })
      .then((stream) => {
        const thermoVideo = window.URL.createObjectURL(stream);
        this.setState({ stream: thermoVideo });
      }).catch((error) => {
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
      });
  }

  playStep = () => {
    const { mode, temperature } = this.props.step;
    const { forwardStep } = this.props;
    switch (mode) {
      case 0:
        let progressSec = 0;
        this.sendCommand({ power: temperature > temperature ? 6 : 0 });
        this.mode0Interval = setInterval(
          () => {
            progressSec += 1;
            if (progressSec >= this.props.step.time) {
              clearInterval(this.mode0Interval);
              forwardStep();
            } else if (this.state.temperature > this.props.step.temperature) {
              this.sendCommand({ power: -1 });
            } else if (this.state.temperature < this.props.step.temperature) {
              this.sendCommand({ power: 6 });
            }
            this.setState({ restTime: this.props.step.time - progressSec });
          },
          1000,
        );
        break;
      case 1:
        let intervalSign = null;
        this.sendCommand({ power: this.props.step.power });
        this.mode1Interval = setInterval(
          () => {
            const newIntervalSign =
              Math.sign(this.props.step.temperature - this.state.temperature);
            if (!intervalSign) intervalSign = newIntervalSign;
            if (newIntervalSign && intervalSign && newIntervalSign !== intervalSign) {
              console.log(intervalSign, newIntervalSign);
              clearInterval(this.mode1Interval);
              forwardStep();
            }
            intervalSign = newIntervalSign;
          },
          1000,
        );
        break;
      case 2:
        this.sendCommand({ power: this.props.step.power, time: 1 });
        let pastSec = 0;
        this.mode2Interval = setInterval(
          () => {
            pastSec += 1;
            if (pastSec >= this.props.step.time) {
              clearInterval(this.mode2Interval);
              forwardStep();
            } else {
              this.sendCommand({ power: this.props.step.power, time: 1 });
            }
            this.setState({ restTime: this.props.step.time - pastSec });
          },
          1000,
        );
        break;
      default:
        break;
    }
  }

  sendCommand = (step) => {
    const { socket } = this.props;
    const device = {
      deviceId: 'ff',
      states: step,
    };
    socket.emit('users/state:update', device);
    socket.once('users/state:update/return', () => {
      console.log(`requested power: ${step.power}, time: ${step.time}`);
    });
    return new Promise((resolve) => {
      socket.once('users/ff/done', () => {
        socket.emit('users/ff/done/return');
        resolve();
      });
    });
  }

  setCoordinate = (e) => {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      measureCoordinateX: e.clientX - rect.left,
      measureCoordinateY: e.clientY - rect.top,
    });
    this.canvas.getContext('2d').beginPath();
  }
  private canvas;
  private video: HTMLVideoElement;
  render() {
    const temp = this.state.temperature ? `${this.state.temperature.toPrecision(4)}℃` : '認識中..';
    const time = this.props.step.mode !== 1 ?
      (
        <ItemWrapper>
          <label>残り時間:</label>
          <p>{this.state.restTime} sec</p>
        </ItemWrapper>
      ) : '';
    return (
      <FFMain>
        <Video
          innerRef={(e: HTMLVideoElement) => { this.video = e; }}
          autoPlay
          src={this.state.stream}
          id="video"
        />
        <Canvas
          onClick={this.setCoordinate}
          innerRef={(e) => { this.canvas = e; }}
          width={320}
          height={240}
        />
        <CurrentState>
          <ItemWrapper>
            <label>現在温度:</label>
            <p>{temp}</p>
          </ItemWrapper>
          {time}
        </CurrentState>
        <FFStep step={this.props.step} />
      </FFMain>
    );
  }
}

export default FFPlay;
