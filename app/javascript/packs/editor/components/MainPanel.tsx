import * as React from 'react';
import {
  main as Main,
  topPanel as TopPanel,
  bottomPanel as BottomPanel,
  stepWrapper as StepWrapper,
  stepList as StepList,
  input as Input,
} from '../styles/MainPanel';
import { StepState, CurrentState, FFState, TextState, TasteState } from '../../../types';
import FF from '../../pieces/FF/containers/FF';
import EditorText from '../../pieces/Text/containers/EditorText';
import EditorTaste from '../../pieces/Taste/containers/EditorTaste';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import FFStep from '../../pieces/FF/components/FFStep';
import TextStep from '../../pieces/Text/components/TextStep';
import TasteStep from '../../pieces/Taste/components/TasteStep';

export interface Props {
  steps: StepState[];
  current: CurrentState;
  ffSteps: FFState[];
  textSteps: TextState[];
  tasteSteps: TasteState[];
  updateTitle(recipeId: number, title: string): void;
}

interface State {
  title: string;
}

class MainPanel extends React.Component<Props, State> {
  state = {
    title: '',
  };

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
    const stepListDom = this.props.steps.map((step) => {
      let dom;
      let id;
      switch (step.pieceId) {
        case FF_ID:
          const ffStep = this.props.ffSteps.find(s => s.id === step.stepId);
          dom = <FFStep step={ffStep} />;
          id = ffStep.id;
          break;
        case TEXT_ID:
          const textStep = this.props.textSteps.find(s => s.id === step.stepId);
          dom = <TextStep step={textStep} />;
          id = textStep.id;
          break;
        case TASTE_ID:
          const tasteStep = this.props.tasteSteps.find(s => s.id === step.stepId);
          dom = <TasteStep step={tasteStep} />;
          id = tasteStep.id;
          break;
        default:
          break;
      }
      return (
        <StepWrapper key={id}>
          {dom}
        </StepWrapper>
      );
    });
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
        <BottomPanel>
          Steps
          <StepList>
            {stepListDom}
          </StepList>
        </BottomPanel>
      </Main>
    );
  }
}

export default MainPanel;
