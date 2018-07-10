import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actions from '../../../actions/';
import { StoreState } from '../../../types/index';

import PieceList from '../components/Editor';

export function mapStateToProps({ piece }: StoreState) {
  return {
    piece,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SwitchPiece>) {
  return {
    switchPiece: (pieceId) => dispatch(actions.switchPiece(pieceId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieceList);

