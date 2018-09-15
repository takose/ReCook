import * as React from 'react';
import {
  itemWrapper as ItemWrapper,
  label as Label,
} from '../../style';
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
          <button>
            <ItemWrapper>
              <Label>温度&nbsp;</Label>
              <p>{step.temperature}℃</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>時間&nbsp;</Label>
              <p>{step.time}sec</p>
            </ItemWrapper>
          </button>
        );
      case 1:
        return (
          <button>
            <ItemWrapper>
              <Label>温度&nbsp;</Label>
              <p>{step.temperature}℃</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>火力&nbsp;</Label>
              <p>{step.power}</p>
            </ItemWrapper>
          </button>
        );
      case 2:
        return (
          <button>
            <ItemWrapper>
              <Label>火力&nbsp;</Label>
              <p>{step.power}</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>時間&nbsp;</Label>
              <p>{step.time}sec</p>
            </ItemWrapper>
          </button>
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
