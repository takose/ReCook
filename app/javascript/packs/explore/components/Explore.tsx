import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RecipeState } from '../../../types';
import {
  main as Main,
  recipeItem as RecipeItem,
  recipeList as RecipeList,
  trash as Trash,
  playButton as PlayButton,
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
        <RecipeItem key={recipe.id}>
          {recipe.title}
          <PlayButton to={`/recipes/player/${recipe.id}`}>Play</PlayButton>
          <Trash>
            <FontAwesomeIcon icon={faTrash} />
          </Trash>
        </RecipeItem>
      );
    });

    return (
      <div>
        <Main>
          <RecipeList>
            {recipeList}
          </RecipeList>
        </Main>
      </div>
    );
  }
}

export default Explore;
