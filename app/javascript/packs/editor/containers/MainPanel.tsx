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
      dispatch(actions.setRecipe(id));
      dispatch(actions.getEditRecipe(id));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPanel));
