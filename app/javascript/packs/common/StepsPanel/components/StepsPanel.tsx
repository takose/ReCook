import * as React from 'react';
import {
  stepWrapper as StepWrapper,
  stepList as StepList,
  main as Main,
} from '../styles/StepsPanel';
import { StepState, CurrentState, FFState, TextState, TasteState } from '../../../../types';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../../constants';
import FFStep from '../../../pieces/FF/components/FFStep';
import TextStep from '../../../pieces/Text/components/TextStep';
import TasteStep from '../../../pieces/Taste/components/TasteStep';

export interface Props {
  steps: { id: number, piece_id: number, content: string }[];
}

interface State {
  title: string;
}

class StepsPanel extends React.Component<Props, State> {
  render () {
    const stepListDom = this.props.steps.map((step) => {
      let dom;
      const content = JSON.parse(step.content);
      switch (step.piece_id) {
        case FF_ID:
          dom = <FFStep step={...content} />;
          break;
        case TEXT_ID:
          dom = <TextStep step={...content} />;
          break;
        case TASTE_ID:
          dom = <TasteStep step={...content} />;
          break;
        default:
          break;
      }
      return (
        <StepWrapper key={step.id}>
          {dom}
        </StepWrapper>
      );
    });
    return (
      <Main>
        Steps
          <StepList>
          {stepListDom}
        </StepList>
      </Main>
    );
  }
}

export default StepsPanel;
