import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState, StepState, FFState } from '../../../types';
import Player from '../components/Player';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.playSteps,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getRecipe: (id: number) => {
      dispatch(actions.setRecipe(id));
      dispatch(actions.getPlayRecipe(id));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
