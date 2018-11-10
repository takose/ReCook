import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  input as Input,
  descInput as DescInput,
} from '../styles/MainPanel';
import { StepState, CurrentState } from '../../../types';
import { RouteComponentProps } from 'react-router';
import FF from '../../pieces/FF/containers/FF';
import EditorText from '../../pieces/Text/containers/EditorText';
import EditorTaste from '../../pieces/Taste/containers/EditorTaste';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  updateRecipe(recipeId: number, title: string, desc: string): void;
  getRecipe(id: number): void;
  resetRecipe(): void;
  switchStep(id): void;
  resetStepId(): void;
  createOrUpdate(stepId, {}): void;
  deleteStep(stepId: number);
}

interface State {
  title?: string;
  desc?: string;
}

class MainPanel extends React.Component<RouteComponentProps<any> & Props, State> {
  private titleDom;
  private descDom;
  state = {
    title: '',
    desc: '',
  };

  componentWillUnmount() {
    this.props.resetStepId();
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getRecipe(parseInt(id, 10));
    } else {
      this.props.resetRecipe();
    }
  }

  titleOnChange = e => this.setState({ title: e.target.value });
  descOnChange = e => this.setState({ desc: e.target.value });

  textInputOnFocusout = (e) => {
    this.props.updateRecipe(this.props.current.editRecipe.id, this.state.title, this.state.desc);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current.editRecipe.title !== this.props.current.editRecipe.title) {
      this.setState({
        title: this.props.current.editRecipe.title,
        desc: this.props.current.editRecipe.desc,
      });
    }
  }
  render() {
    const { current, createOrUpdate, deleteStep } = this.props;
    const selectPiece = () => {
      let step;
      if (current.stepId) {
        step = JSON.parse(current.editRecipe.steps.find(s => s.id === current.stepId).content);
      }
      switch (current.pieceId) {
        case FF_ID:
          return <FF step={step} id={current.stepId}
                  createOrUpdate={content => createOrUpdate(current.stepId, content)}
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        case TEXT_ID:
          return <EditorText step={step} id={current.stepId}
                  createOrUpdate={content => createOrUpdate(current.stepId, content)}
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        case TASTE_ID:
          return <EditorTaste step={step} id={current.stepId}
                  createOrUpdate={content => createOrUpdate(current.stepId, content)}
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        default:
          break;
      }
    };
    return (
      <Main>
        <TopPanel>
          <Input
            placeholder="タイトル"
            type="text"
            onChange={this.titleOnChange}
            onBlur={this.textInputOnFocusout}
            innerRef={e => this.titleDom = e}
            value={this.state.title} />
          <DescInput
            placeholder="レシピ概要 / 変更点"
            type="text"
            onChange={this.descOnChange}
            onBlur={this.textInputOnFocusout}
            innerRef={e => this.descDom = e}
            value={this.state.desc} />
          {selectPiece()}
        </TopPanel>
        <StepsPanel stepOnClick={this.props.switchStep} steps={this.props.steps} />
      </Main>
    );
  }
}

export default MainPanel;
