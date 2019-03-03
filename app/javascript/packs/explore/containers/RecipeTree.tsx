import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import RecipeTree from '../components/RecipeTree';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.recipe.steps,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getRecipe: (id: number) => {
      dispatch(actions.getRecipe(id));
    },
    resetRecipe: () => {
      dispatch(actions.resetRecipe());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTree);
