import * as React from 'react';
import {
  stepWrapper as StepWrapper,
  stepList as StepList,
  main as Main,
  temp as Temp,
} from '../styles/StepsPanel';
import { StepState } from '../../../../types';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../../constants';
import FFStep from '../../../pieces/FF/components/FFStep';
import TextStep from '../../../pieces/Text/components/TextStep';
import TasteStep from '../../../pieces/Taste/components/TasteStep';

export interface Props {
  steps: StepState[];
  currentStepId: number;
  stepOnClick(id: number, pieceId: number): void;
}

interface State {
}

class StepsPanel extends React.Component<Props, State> {
  render () {
    const stepListDom = this.props.steps.map((step) => {
      if (step.id === 0) {
        return <Temp />;
      }
      let dom;
      let pieceColor;
      const content = JSON.parse(step.content);
      switch (step.pieceId) {
        case FF_ID:
          dom = <FFStep step={...content} />;
          pieceColor = '5px lightpink';
          break;
        case TEXT_ID:
          dom = <TextStep step={...content} />;
          pieceColor = '10px orange';
          break;
        case TASTE_ID:
          dom = <TasteStep step={...content} />;
          pieceColor = '5px lightblue';
          break;
        default:
          break;
      }
      return (
        <StepWrapper
          key={step.id}
          onClick={() => this.props.stepOnClick(step.id, step.pieceId)}
          pieceColor={pieceColor}
          isActive={this.props.currentStepId === step.id}
        >
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
