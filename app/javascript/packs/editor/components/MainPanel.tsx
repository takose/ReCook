import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  input as Input,
} from '../styles/MainPanel';
import { StepState, CurrentState, RecipeState } from '../../../types';
import { RouteComponentProps } from 'react-router';
import FF from '../../pieces/FF/containers/FF';
import EditorText from '../../pieces/Text/containers/EditorText';
import EditorTaste from '../../pieces/Taste/containers/EditorTaste';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  recipes: RecipeState[];
  updateTitle(recipeId: number, title: string): void;
  getRecipe(id: number): void;
}

interface State {
  title: string;
}

class MainPanel extends React.Component<RouteComponentProps<any> & Props, State> {
  state = {
    title: '',
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getRecipe(parseInt(id, 10));
    }
  }

  titleOnChange = e => this.setState({ title: e.target.value });
  titleOnFocusout = (e) => {
    this.props.updateTitle(this.props.current.recipeId, this.state.title);
  }
  render() {
    const selectPiece = () => {
      switch (this.props.current.pieceId) {
        case FF_ID:
          return <FF />;
        case TEXT_ID:
          return <EditorText />;
        case TASTE_ID:
          return <EditorTaste />;
        default:
          break;
      }
    };
    const currentPiece = selectPiece();
    return (
      <Main>
        <TopPanel>
          <Input
            placeholder="タイトル"
            type="text"
            onChange={this.titleOnChange}
            onBlur={this.titleOnFocusout}
            value={this.state.title} />
          {currentPiece}
        </TopPanel>
        <StepsPanel steps={this.props.steps} />
      </Main>
    );
  }
}

export default MainPanel;
