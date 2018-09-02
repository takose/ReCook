import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  bottomPanel as BottomPanel,
} from '../styles/MainPanel';
import { StepState, CurrentState, FFState } from '../../../types';
import FF from '../../pieces/FF/containers/FF';
import { FF_ID } from '../../../constants';
import FFStep from '../../pieces/FF/components/FFStep';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  ffSteps: FFState[];
}

class MainPanel extends React.Component<Props, object> {
  render() {
    const selectPiece = () => {
      switch (this.props.current.pieceId) {
        case FF_ID:
          return <FF />;
        default:
          break;
      }
    };
    const stepListDom = this.props.steps.map((step) => {
      switch (step.pieceId) {
        case FF_ID:
          const ffStep = this.props.ffSteps.find(s => s.id === step.stepId);
          return (
            <FFStep step={ffStep} />
          );
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
