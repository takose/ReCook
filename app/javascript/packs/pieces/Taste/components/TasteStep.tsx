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
          {this.props.step.soysauce}CC
        </ItemWrapper>
        <ItemWrapper>
          <Label>みりん&nbsp;</Label>
          {this.props.step.mirin}CC
        </ItemWrapper>
        <ItemWrapper>
          <Label>酒&nbsp;</Label>
          {this.props.step.sake}CC
        </ItemWrapper>
        <ItemWrapper>
          <Label>酢&nbsp;</Label>
          {this.props.step.vinegar}CC
        </ItemWrapper>
      </div>
    );
  }
}

export default TextStep;
