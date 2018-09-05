import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  bottomPanel as BottomPanel,
} from '../styles/MainPanel';
import { StepState, CurrentState, FFState, TextState, TasteState } from '../../../types';
import FF from '../../pieces/FF/containers/FF';
import EditorText from '../../pieces/Text/containers/EditorText';
import EditorTaste from '../../pieces/Taste/containers/EditorTaste';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import FFStep from '../../pieces/FF/components/FFStep';
import TextStep from '../../pieces/Text/components/TextStep';
import TasteStep from '../../pieces/Taste/components/TasteStep';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  ffSteps: FFState[];
  textSteps: TextState[];
  tasteSteps: TasteState[];
}

class MainPanel extends React.Component<Props, object> {
  render() {
    const selectPiece = () => {
      switch (this.props.current.pieceId) {
        case FF_ID:
          return <FF />;
        case TEXT_ID:
          return <EditorText />;
        case TASTE_ID:
          return <EditorTaste />;
        default:
          break;
      }
    };
    const stepListDom = this.props.steps.map((step) => {
      switch (step.pieceId) {
        case FF_ID:
          const ffStep = this.props.ffSteps.find(s => s.id === step.stepId);
          return <FFStep step={ffStep} key={ffStep.id} />;
        case TEXT_ID:
          const textStep = this.props.textSteps.find(s => s.id === step.stepId);
          return <TextStep step={textStep} key={textStep.id} />;
        default:
          break;
      }
    });
    const currentPiece = selectPiece();
    return (
      <Main>
        <TopPanel>
          {currentPiece}
        </TopPanel>
        <BottomPanel>
          {stepListDom}
        </BottomPanel>
      </Main>
    );
  }
}

export default MainPanel;
