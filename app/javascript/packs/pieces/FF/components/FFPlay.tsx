import * as React from 'react';
import { Tesseract } from 'tesseract.ts';
import { CONFIG } from '../../../../constants';
import {
  video as Video,
  canvas as Canvas,
} from '../styles/FFPlay';

export interface Props {
}

export interface State {
  stream: any;
  measureCoordinateX: number;
  measureCoordinateY: number;
}

class FFPlay extends React.Component<Props, State> {
  componentDidMount() {
    if (this.canvas !== undefined && this.video !== undefined) {
      const ctx = this.canvas.getContext('2d');
      let min;
      let max;
      setInterval(
        () => {
          const { measureCoordinateX, measureCoordinateY } = this.state;
          ctx.drawImage(this.video, 0, 0, 320, 240);
          ctx.rect(measureCoordinateX - 5, measureCoordinateY - 5, 10, 10);
          ctx.stroke();
        },
        1000 / 30,
      );
      setInterval(
        () => {
          const { measureCoordinateX, measureCoordinateY } = this.state;
          Tesseract.recognize(ctx.getImageData(280, 5, 35, 20), CONFIG)
            .then((result) => { max = parseInt(result.text.replace(/\r?\n/g, ''), 10) / 10; });
          Tesseract.recognize(ctx.getImageData(280, 215, 35, 20), CONFIG)
            .then((result) => { min = parseInt(result.text.replace(/\r?\n/g, ''), 10) / 10; });
          const color = ctx.getImageData(measureCoordinateX, measureCoordinateY, 1, 1).data[0];
          const temp = min + (max - min) / 255 * color;
          console.log(`min: ${min}, max: ${max}, temp: ${temp}`);
        },
        1000,
      );
    }
  }
  componentWillMount() {
    this.setState({
      stream: '',
      measureCoordinateX: 160,
      measureCoordinateY: 120,
    });
    this.setState({ stream: '' });
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
      </div>
    );
  }
}

export default FFPlay;
