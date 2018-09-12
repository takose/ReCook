import { connect } from 'react-redux';
import { StoreState, RecipeState } from '../../../types';
import * as actions from '../../../actions';
import Explore from '../components/Explore';

export function mapStateToProps(state: StoreState) {
  return {
    recipes: state.recipes,
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

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
