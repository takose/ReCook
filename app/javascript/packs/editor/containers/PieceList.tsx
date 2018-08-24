import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';

import PieceList from '../components/PieceList';

export function mapStateToProps(state: StoreState) {
  return {
    pieces: state.pieces,
    currentPiece: state.pieces.pieces.find(piece => (
      piece.id === state.current.pieceId
    )),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    switchPiece: (pieceId: string) => {
      dispatch(actions.switchPiece(pieceId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PieceList);
