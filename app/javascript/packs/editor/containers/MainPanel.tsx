import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import  MainPanel from '../components/MainPanel';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.editRecipe.steps,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateTitle: (recipeId: number, title: string) => {
      dispatch(actions.updateTitle(recipeId, title));
    },
    getRecipe: (id: number) => {
      dispatch(actions.getEditRecipe(id));
    },
    resetRecipe: () => {
      dispatch(actions.resetEditRecipe());
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPanel));
