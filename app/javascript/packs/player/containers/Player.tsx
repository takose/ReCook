import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { StoreState, StepState, FFState } from '../../../types';
import Player from '../components/Player';

export function mapStateToProps(state: StoreState) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
