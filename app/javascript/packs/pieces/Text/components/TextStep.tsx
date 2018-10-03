import * as React from 'react';
import {
  main as Main,
  textLine as TextLine,
} from '../../style';
import { TextState } from '../../../../types';

export interface Props {
  step: TextState;
}

class TextStep extends React.Component<Props, object> {
  render() {
    const lines = this.props.step.body.split('\n').map((line) => {
      return <TextLine>{line}</TextLine>;
    });
    return (
      <div>{lines}</div>
    );
  }
}

export default TextStep;
