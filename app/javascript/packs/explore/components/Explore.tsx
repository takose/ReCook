import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay, faEdit } from '@fortawesome/free-solid-svg-icons';
import { RecipeState } from '../../../types';
import {
  main as Main,
  recipeItem as RecipeItem,
  recipeList as RecipeList,
  trash as Trash,
  playButton as PlayButton,
  playIcon as PlayIcon,
  editButton as EditButton,
  buttonWrapper as ButtonWrapper,
  iconWrapper as IconWrapper,
  user as User,
  userIcon as UserIcon,
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
        const recipes = res.map(recipe => ({
          ...recipe,
          user: {
            nickname: recipe.user.nickname,
            imageUrl: recipe.user.image_url,
          },
        }));
        this.props.setRecipes(recipes);
      });
  }
  render() {
    const recipeList = this.props.recipes.map((recipe) => {
      return (
        <RecipeItem key={recipe.id}>
          {recipe.title}
          <ButtonWrapper>
            <PlayButton to={`/recipes/player/${recipe.id}`}>
              <PlayIcon icon={faPlay} />
              Play
            </PlayButton>
            <EditButton to={`/recipes/edit/${recipe.id}`}>
              <PlayIcon icon={faEdit} />
              Edit
            </EditButton>
          </ButtonWrapper>
          <IconWrapper>
            <User>
              <UserIcon src={recipe.user.imageUrl} />
              {recipe.user.nickname}
            </User>
            <Trash>
              <FontAwesomeIcon icon={faTrash} />
            </Trash>
          </IconWrapper>
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
