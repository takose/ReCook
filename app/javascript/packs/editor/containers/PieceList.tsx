import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../../../actions/';
import { PieceState } from '../../../types/index';

import PieceList from '../components/PieceList';

export function mapStateToProps(piece: PieceState) {
  return {
    piece,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    switchPiece: (pieceId: string) => dispatch(actions.switchPiece(pieceId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PieceList);
