import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import  MainPanel from '../components/MainPanel';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.recipe.steps,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateRecipe: (recipeId: number, title: string, desc: string) => {
      dispatch(actions.updateRecipe(recipeId, title, desc));
    },
    getRecipe: (id: number) => {
      dispatch(actions.getRecipe(id));
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
    createOrUpdate: (stepId, content, option: {}) => {
      dispatch(actions.createStep(stepId, { ...content }, option));
    },
    deleteStep: (stepId: number) => {
      dispatch(actions.deleteStep(stepId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPanel));
