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
          <div>
            <ItemWrapper>
              <Label>温度&nbsp;</Label>
              <p>{step.temperature}℃</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>時間&nbsp;</Label>
              <p>{step.time}sec</p>
            </ItemWrapper>
          </div>
        );
      case 1:
        return (
          <div>
            <ItemWrapper>
              <Label>温度&nbsp;</Label>
              <p>{step.temperature}℃</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>火力&nbsp;</Label>
              <p>{step.power}</p>
            </ItemWrapper>
          </div>
        );
      case 2:
        return (
          <div>
            <ItemWrapper>
              <Label>火力&nbsp;</Label>
              <p>{step.power}</p>
            </ItemWrapper>
            <ItemWrapper>
              <Label>時間&nbsp;</Label>
              <p>{step.time}sec</p>
            </ItemWrapper>
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
