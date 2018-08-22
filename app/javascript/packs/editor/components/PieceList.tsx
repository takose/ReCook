import * as React from 'react';
import { PiecesState, PieceState } from '../../../types';

export interface Props {
  pieces: PiecesState;
  currentPiece: PieceState;
  switchPiece(pieceId: string): void;
}

class PieceList extends React.Component<Props, object> {
  render() {
    const { switchPiece, pieces } = this.props;
    const piecesDom = pieces.pieces.map(piece => (
      <button className="piece" onClick={() => switchPiece(piece.name)}>{piece.name}</button>
    ));
    return (
      <div className="piece-list">
        {piecesDom}
      </div>
    );
  }
}

export default PieceList;
