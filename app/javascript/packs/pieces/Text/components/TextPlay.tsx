import * as React from 'react';
import { TextState } from '../../../../types';
import TextStep from './TextStep';
export interface Props {
  step: TextState;
}

export interface State {
}

class TextPlay extends React.Component<Props, State> {
  render() {
    return (
      <TextStep step={this.props.step} />
    );
  }
}

export default TextPlay;
