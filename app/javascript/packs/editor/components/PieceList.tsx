import * as React from 'react';
import { PieceState } from '../../../types/index';

export interface Props {
  piece: PieceState;
  switchPiece(pieceId: string): void;
}

class PieceList extends React.Component<Props, object> {
  render() {
    const { switchPiece } = this.props;
    return (
      <div className="piece-list">
        <button className="piece" onClick={() => switchPiece('mix')}>mix</button>
        <button className="piece" onClick={() => switchPiece('bake')}>bake</button>
        <p>{this.props.piece.name}</p>
      </div>
    );
  }
}

export default PieceList;
