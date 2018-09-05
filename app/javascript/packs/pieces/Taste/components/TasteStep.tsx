import * as React from 'react';
import {
  main as Main,
} from '../../style';
import { TasteState } from '../../../../types';

export interface Props {
  step: TasteState;
}

class TextStep extends React.Component<Props, object> {
  render() {
    return (
      <div>
        <div>{this.props.step.soysauce}</div>
        <div>{this.props.step.mirin}</div>
        <div>{this.props.step.sake}</div>
        <div>{this.props.step.vinegar}</div>
      </div>
    );
  }
}

export default TextStep;
