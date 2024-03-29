import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay, faEdit, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { RecipeState, UserState, StepState } from '../../../types';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';
import {
  main as Main,
  recipeItem as RecipeItem,
  recipeList as RecipeList,
  titleWrapper as TitleWrapper,
  titleIcon as TitleIcon,
  icon as Icon,
  playButton as PlayButton,
  playIcon as PlayIcon,
  editButton as EditButton,
  buttonWrapper as ButtonWrapper,
  iconWrapper as IconWrapper,
  bottomBlock as BottomBlock,
  user as User,
  userIcon as UserIcon,
  modeSelector as ModeSelector,
  modeSelectorItem as ModeSelectorItem,
  listWrapper as ListWrapper,
} from '../styles/Explore';
import RecipeTree from '../containers/RecipeTree';

export interface Props {
  recipes: RecipeState[];
  user: UserState;
  setRecipes(recipes: RecipeState[]): void;
  deleteRecipe(id: number): void;
  steps: StepState[];
}

interface States {
  mode: string;
}

class Explore extends React.Component<RouteComponentProps<any> & Props, States> {
  state = { mode: 'TREE' };

  componentWillMount() {
    fetch('/api/recipes')
      .then(res => res.json())
      .then((res) => {
        const recipes = res.map(recipe => ({
          ...recipe,
          originId: recipe.origin_id,
          user: {
            id: recipe.user.id,
            nickname: recipe.user.nickname,
            imageUrl: recipe.user.image_url,
          },
        }));
        this.props.setRecipes(recipes);
      });
  }

  forkRecipe = (recipe) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        token: this.props.user.token,
      }),
    };
    fetch(`/api/recipes/${recipe.id}/fork`, options)
    .then(res => res.json())
    .then((res) => {
      this.props.history.push(`/recipes/edit/${res.recipe.id}`);
    });
  }

  render() {
    const recipeList = this.props.recipes.map((recipe) => {
      const fork = recipe.originId ? <TitleIcon icon={faCodeBranch} /> : null;
      return (
        <RecipeItem key={recipe.id}>
          <TitleWrapper>{recipe.title}{fork}</TitleWrapper>
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
          <BottomBlock>
            <User>
              <UserIcon src={recipe.user.imageUrl} />
              {recipe.user.nickname}
            </User>
            <IconWrapper>
              <Icon onClick={() => this.forkRecipe(recipe)}>
                <FontAwesomeIcon icon={faCodeBranch} />
              </Icon>
              {
                this.props.user.id === recipe.user.id ? (
                  <Icon onClick={() => this.props.deleteRecipe(recipe.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Icon>
                ) : null
              }
            </IconWrapper>
          </BottomBlock>
        </RecipeItem>
      );
    });

    return (
      <div>
        <Main>
          <ModeSelector>
            <ModeSelectorItem
              isActive={this.state.mode === 'LIST'} onClick={() => this.setState({ mode: 'LIST' })}>
              LIST
            </ModeSelectorItem>
            <ModeSelectorItem
              isActive={this.state.mode === 'TREE'} onClick={() => this.setState({ mode: 'TREE' })}>
              TREE
            </ModeSelectorItem>
          </ModeSelector>
          <ListWrapper>
            { this.state.mode === 'LIST' ?
              <RecipeList>{recipeList}</RecipeList> :
              <RecipeTree recipes={this.props.recipes} />
            }
            {
              this.props.steps.length > 0 ?
                <StepsPanel stepOnClick={() => {}} steps={this.props.steps} currentStepId={null} />
                : null
            }
          </ListWrapper>
        </Main>
      </div>
    );
  }
}

export default Explore;
