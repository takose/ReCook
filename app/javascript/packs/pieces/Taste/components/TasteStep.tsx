import * as React from 'react';
import {
  main as Main,
  label as Label,
  itemWrapper as ItemWrapper,
} from '../../style';
import { TasteState } from '../../../../types';

export interface Props {
  step: TasteState;
}

class TextStep extends React.Component<Props, object> {
  render() {
    return (
      <div>
        <ItemWrapper>
          <Label>醤油&nbsp;</Label>
          <p>{this.props.step.soysauce}CC</p>
        </ItemWrapper>
        <ItemWrapper>
          <Label>みりん&nbsp;</Label>
          <p>{this.props.step.mirin}CC</p>
        </ItemWrapper>
        <ItemWrapper>
          <Label>酒&nbsp;</Label>
          <p>{this.props.step.sake}CC</p>
        </ItemWrapper>
        <ItemWrapper>
          <Label>酢&nbsp;</Label>
          <p>{this.props.step.vinegar}CC</p>
        </ItemWrapper>
      </div>
    );
  }
}

export default TextStep;
