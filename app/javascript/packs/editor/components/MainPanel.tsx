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
import Option from './Option';
import EditorTaste from '../../pieces/Taste/containers/EditorTaste';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  updateRecipe(recipeId: number, title: string, desc: string): void;
  getRecipe(id: number): void;
  resetRecipe(): void;
  switchStep(id, pieceId): void;
  resetStepId(): void;
  createOrUpdate(stepId, {}, {}): void;
  deleteStep(stepId: number);
}

interface State {
  title?: string;
  desc?: string;
  option?: { direction?: string, stepId?: number };
}

class MainPanel extends React.Component<RouteComponentProps<any> & Props, State> {
  private titleDom;
  private descDom;
  state = {
    title: '',
    desc: '',
    option: { direction: null, stepId: null },
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
    this.props.updateRecipe(this.props.current.recipe.id, this.state.title, this.state.desc);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current.recipe.title !== this.props.current.recipe.title) {
      this.setState({
        title: this.props.current.recipe.title,
        desc: this.props.current.recipe.desc,
      });
    }
  }

  stepOnClick = (id, pieceId) => {
    this.props.switchStep(id, pieceId);
    this.setState({ option: {} });
  }

  updateEditOption = (direction) => {
    this.setState({ option: { direction, stepId: this.props.current.stepId } });
  }

  render() {
    const { current, createOrUpdate, deleteStep } = this.props;
    const id = this.state.option.stepId ? null : current.stepId;
    const selectPiece = () => {
      let step;
      if (current.stepId) {
        step = JSON.parse(current.recipe.steps.find(s => s.id === current.stepId).content);
      }
      switch (current.pieceId) {
        case FF_ID:
          return <FF step={step} id={id}
                  createOrUpdate={
                    content => createOrUpdate(current.stepId, content, this.state.option)
                  }
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        case TEXT_ID:
          return <EditorText step={step} id={id}
                  createOrUpdate={
                    content => createOrUpdate(current.stepId, content, this.state.option)
                  }
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        case TASTE_ID:
          return <EditorTaste step={step} id={id}
                  createOrUpdate={
                    content => createOrUpdate(current.stepId, content, this.state.option)
                  }
                  deleteStep={() => deleteStep(current.stepId)}
                />;
        default:
          break;
      }
    };
    const steps = [...this.props.steps];
    if (this.state.option.direction) {
      const step = (current.recipe.steps.find(s => s.id === this.state.option.stepId));
      const idx = this.state.option.direction === 'before' ?
        current.recipe.steps.indexOf(step) : current.recipe.steps.indexOf(step) + 1;
      steps.splice(idx, 0, { id: null, pieceId: 0, content: '', nextId: 0 });
    }
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
          { current.stepId && !this.state.option.direction ?
            <Option updateEditOption={this.updateEditOption} /> : null }
        </TopPanel>
        <StepsPanel
          stepOnClick={this.stepOnClick} steps={steps} currentStepId={id}
        />
      </Main>
    );
  }
}

export default MainPanel;
