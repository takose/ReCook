import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import Player from '../components/Player';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.recipe.steps,
    stepId: state.current.stepId,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getRecipe: (id: number) => {
      dispatch(actions.getRecipe(id));
    },
    forwardStep: (id: number) => {
      dispatch(actions.switchStep(id));
    },
    resetRecipe: () => {
      dispatch(actions.resetRecipe());
    },
    switchStep: (id: number, pieceId: number) => {
      dispatch(actions.switchStep(id));
      dispatch(actions.switchPiece(pieceId));
    },
    resetStepId: () => {
      dispatch(actions.switchStep(null));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
