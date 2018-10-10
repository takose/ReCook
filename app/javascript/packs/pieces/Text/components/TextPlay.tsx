import * as React from 'react';
import { TextState } from '../../../../types';
export interface Props {
  step: TextState;
}
import {
  textPlayMain as TextPlayMain,
  textLine as TextLine,
} from '../../style';

export interface State {
}

class TextPlay extends React.Component<Props, State> {
  render() {
    const lines = this.props.step.body.split('\n').map((line) => {
      return <TextLine>{line}</TextLine>;
    });
    return (
      <TextPlayMain>{lines}</TextPlayMain>
    );
  }
}

export default TextPlay;
