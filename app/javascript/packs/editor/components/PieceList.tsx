import * as React from 'react';
import { PieceState } from '../../../types/index';
import { switchPiece } from '../../../actions';

export interface Props {
  piece: PieceState;
  switchPiece(): void;
}

class PieceList extends React.Component<Props, object> {
  render() {
    return (
      <div className="piece-list">
        <button className="piece" onClick={() => switchPiece("mix")}>mix</button>
        <button className="piece" onClick={() => switchPiece("bake")}>bake</button>
      </div>
    );
  }
}

export default PieceList;
