import * as React from 'react';
import { TextState } from '../../../../types';
export interface Props {
  step: TextState;
}
import {
  textPlayMain as TextPlayMain,
} from '../../style';

export interface State {
}

class TextPlay extends React.Component<Props, State> {
  render() {
    return (
      <TextPlayMain>{this.props.step.body}</TextPlayMain>
    );
  }
}

export default TextPlay;
