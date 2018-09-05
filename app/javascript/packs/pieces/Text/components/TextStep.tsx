import * as React from 'react';
import {
  main as Main,
} from '../../style';
import { TextState } from '../../../../types';

export interface Props {
  step: TextState;
}

class TextStep extends React.Component<Props, object> {
  render() {
    return (
      <div>{this.props.step.body}</div>
    );
  }
}

export default TextStep;
