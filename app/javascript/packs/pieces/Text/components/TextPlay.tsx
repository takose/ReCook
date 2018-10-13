import * as React from 'react';
import { TextState } from '../../../../types';
export interface Props {
  step: TextState;
}
import {
  textPlayMain as TextPlayMain,
  textLine as TextLine,
  textPicture as TextPicture,
} from '../../style';

export interface State {
}

class TextPlay extends React.Component<Props, State> {
  render() {
    const { body, photoUrl } = this.props.step;
    const lines = body.split('\n').map((line) => {
      return <TextLine key={line}>{line}</TextLine>;
    });
    return (
      <TextPlayMain>
        <TextPicture src={photoUrl} />
        <div>
          {lines}
        </div>
      </TextPlayMain>
    );
  }
}

export default TextPlay;
