import * as React from 'react';
import { RecipeState } from '../../../types';
import {
  main as Main,
  recipeItem as RecipeItem,
  recipeList as RecipeList,
} from '../styles/Explore';

export interface Props {
  recipes: RecipeState[];
  setRecipes(recipes: RecipeState[]): void;
}

class Explore extends React.Component<Props, object> {
  componentWillMount() {
    fetch('/api/recipes')
      .then(res => res.json())
      .then((res) => {
        this.props.setRecipes(res);
      });
  }
  render() {
    const recipeList = this.props.recipes.map((recipe) => {
      return (
        <RecipeItem to={`/recipes/player/${recipe.id}`}>
          {recipe.title}
        </RecipeItem>
      );
    });

    return (
      <div>
        <Main>
          here is explore
          <RecipeList>
            {recipeList}
          </RecipeList>
        </Main>
      </div>
    );
  }
}

export default Explore;
