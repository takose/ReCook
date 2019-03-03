import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StoreState, RecipeState } from '../../../types';
import * as actions from '../../../actions';
import Explore from '../components/Explore';

export function mapStateToProps(state: StoreState) {
  return {
    recipes: state.recipes,
    user: state.user,
    steps: state.current.recipe.steps,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setRecipes: (recipes: RecipeState[]) => {
      dispatch(actions.setRecipes(recipes));
    },
    deleteRecipe: (id: number) => {
      dispatch(actions.deleteRecipe(id));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Explore));
