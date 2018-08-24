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
  switchPiece(pieceId: string): void;
}

class PieceList extends React.Component<Props, object> {
  render() {
    const { switchPiece, pieces } = this.props;
    const piecesDom = pieces.map(piece => (
      <Piece className="piece" onClick={() => switchPiece(piece.name)}>
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
