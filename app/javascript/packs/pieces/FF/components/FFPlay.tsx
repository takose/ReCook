import * as React from 'react';
import { Tesseract } from 'tesseract.ts';
import { CONFIG } from '../../../../constants';
import { FFState } from '../../../../types';
import {
  video as Video,
  canvas as Canvas,
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
  measureCoordinateX: number;
  measureCoordinateY: number;
}

class FFPlay extends React.Component<Props, State> {
  private updateVideoInterval = null;
  private measureTempInterval = null;
  state = {
    stream: null,
    temperature: null,
    measureCoordinateX: 160,
    measureCoordinateY: 120,
  };
  clearIntervals = () => {
    clearInterval(this.measureTempInterval);
    clearInterval(this.updateVideoInterval);
    this.updateVideoInterval = null;
    this.measureTempInterval = null;
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
      this.playStep();
    }
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
    let state;
    const { mode } = this.props.step;
    switch (mode) {
      case 0:
        state = { power: 6 };
        break;
      case 1:
        state = { power: this.props.step.power };
        break;
      case 2:
        state = { power: this.props.step.power, time: this.props.step.time };
        break;
      default:
        break;
    }

    this.sendCommand(state)
      .then((res) => {
        const { forwardStep } = this.props;
        switch (mode) {
          case 0:
            let progressSec = 0;
            const timer = setInterval(
              () => {
                progressSec += 1;
                if (progressSec >= this.props.step.time) {
                  clearInterval(timer);
                  forwardStep();
                } else if (this.state.temperature > this.props.step.temperature) {
                  this.sendCommand({ power: -1 });
                } else if (this.state.temperature < this.props.step.temperature) {
                  this.sendCommand({ power: 6 });
                }
              },
              1000,
            );
            break;
          case 1:
            let intervalSign = null;
            const wait = setInterval(
              () => {
                const newIntervalSign =
                  Math.sign(this.props.step.temperature - this.state.temperature);
                if (!intervalSign) intervalSign = newIntervalSign;
                if (newIntervalSign !== intervalSign) {
                  clearInterval(wait);
                  forwardStep();
                }
                intervalSign = newIntervalSign;
              },
              1000,
            );
            break;
          case 2:
            forwardStep();
            break;
          default:
            break;
        }
      });
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
    return (
      <div>
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
        {this.state.temperature}
      </div>
    );
  }
}

export default FFPlay;
