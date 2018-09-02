import * as React from 'react';
import {
  main as Main,
} from '../styles/FF';
import { FFState } from '../../../../types';

export interface Props {
  step: FFState;
}

class FFStep extends React.Component<Props, object> {
  switchViewByMode = () => {
    const { step } = this.props;
    switch (step.mode) {
      case 0:
        return (
          <div>
            <p>{step.temperature}℃</p>
            <p>{step.time}sec</p>
          </div>
        );
      case 1:
        return (
          <div>
            <p>{step.temperature}℃</p>
            <p>{step.power}</p>
          </div>
        );
      case 2:
        return (
          <div>
            <p>{step.power}</p>
            <p>{step.time}sec</p>
          </div>
        );
      default:
        break;
    }
  }
  render() {
    const step = this.switchViewByMode();
    return (step);
  }
}

export default FFStep;
