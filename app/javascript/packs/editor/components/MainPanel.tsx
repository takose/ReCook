import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  bottomPanel as BottomPanel,
} from '../styles/MainPanel';
import { StepState, CurrentState } from '../../../types';
import FF from '../../pieces/FF/containers/FF';
import { FF_ID } from '../../../constants';

export interface Props {
  steps: StepState[];
  current: CurrentState;
}

class MainPanel extends React.Component<Props, object> {
  render() {
    const selectPiece = () => {
      switch (this.props.current.pieceId) {
        case FF_ID:
          return <FF />;
          break;
        default:
          break;
      }
    };
    const currentPiece = selectPiece();
    return (
      <Main>
        <TopPanel>
          {currentPiece}
        </TopPanel>
        <BottomPanel>
        </BottomPanel>
      </Main>
    );
  }
}

export default MainPanel;
