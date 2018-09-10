import * as React from 'react';
import {
  stepWrapper as StepWrapper,
  stepList as StepList,
  main as Main,
} from '../styles/StepsPanel';
import { RouteComponentProps } from 'react-router';
import { StepState } from '../../../../types';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../../constants';
import FFStep from '../../../pieces/FF/components/FFStep';
import TextStep from '../../../pieces/Text/components/TextStep';
import TasteStep from '../../../pieces/Taste/components/TasteStep';

export interface Props {
}

interface State {
  steps: StepState[];
}

class StepsPanel extends React.Component<RouteComponentProps<any>, State> {
  state = {
    steps: [],
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      fetch(`/api/steps?recipe_id=${id}`)
        .then(res => res.json())
        .then((res) => {
          const steps = res.map(step => ({
            ...step,
            pieceId: step.piece_id,
          }));
          this.setState({ steps });
        });
    }
  }

  render () {
    const stepListDom = this.state.steps.map((step) => {
      let dom;
      const content = JSON.parse(step.content);
      switch (step.pieceId) {
        case FF_ID:
          dom = <FFStep step={...content} />;
          break;
        case TEXT_ID:
          dom = <TextStep step={...content} />;
          break;
        case TASTE_ID:
          dom = <TasteStep step={...content} />;
          break;
        default:
          break;
      }
      return (
        <StepWrapper key={step.id}>
          {dom}
        </StepWrapper>
      );
    });
    return (
      <Main>
        Steps
          <StepList>
          {stepListDom}
        </StepList>
      </Main>
    );
  }
}

export default StepsPanel;
