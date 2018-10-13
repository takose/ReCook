import * as React from 'react';
import {
  textLine as TextLine,
} from '../../style';
import { TextState } from '../../../../types';

export interface Props {
  step: TextState;
}

class TextStep extends React.Component<Props, object> {
  render() {
    const lines = this.props.step.body.split('\n').map((line) => {
      return <TextLine key={line}>{line}</TextLine>;
    });
    return (
      <div>{lines}</div>
    );
  }
}

export default TextStep;
