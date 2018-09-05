import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  bottomPanel as BottomPanel,
} from '../styles/MainPanel';
import { StepState, CurrentState, FFState, TextState } from '../../../types';
import FF from '../../pieces/FF/containers/FF';
import EditorText from '../../pieces/Text/containers/EditorText';
import { FF_ID, TEXT_ID } from '../../../constants';
import FFStep from '../../pieces/FF/components/FFStep';
import TextStep from '../../pieces/Text/components/TextStep';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  ffSteps: FFState[];
  textSteps: TextState[];
}

class MainPanel extends React.Component<Props, object> {
  render() {
    const selectPiece = () => {
      switch (this.props.current.pieceId) {
        case FF_ID:
          return <FF />;
        case TEXT_ID:
          return <EditorText />;
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
