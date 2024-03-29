import * as React from 'react';
import { PieceState } from '../../../types';
import {
  pieceList as PieceListMain,
  piece as Piece,
  title as Title,
} from '../styles/InfoPanel';

export interface Props {
  pieces: PieceState[];
  currentPiece: PieceState;
  switchPiece(pieceId: number): void;
}

class PieceList extends React.Component<Props, object> {
  render() {
    const { switchPiece, pieces, currentPiece } = this.props;
    const piecesDom = pieces.map(piece => (
      <Piece
        key={piece.id}
        className="piece"
        onClick={() => switchPiece(piece.id)}
        primary={piece.id === currentPiece.id}>
        {piece.name}
      </Piece>
    ));
    return (
      <div>
        <Title>Tool</Title>
        <PieceListMain>
          {piecesDom}
        </PieceListMain>
      </div>
    );
  }
}

export default PieceList;
