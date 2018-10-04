import 'babel-polyfill';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as io from 'socket.io-client';
import { StepState } from '../../../types';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';
import { FF_ID, TEXT_ID, TASTE_ID } from '../../../constants';
import {
  main as Main,
  topPanel as TopPanel,
} from '../styles/Player';
import FFPlay from '../../pieces/FF/components/FFPlay';
import TastePlay from '../../pieces/Taste/components/TastePlay';
import TextPlay from '../../pieces/Text/components/TextPlay';

export interface Props {
  steps: StepState[];
  stepId: number;
  getRecipe(id: number): void;
  switchStep(id: number, pieceId: number): void;
  resetStepId(): void;
  resetRecipe(): void;
}

export interface State {
  socket:  SocketIOClient.Socket;
}
export default class Player extends React.Component<RouteComponentProps<any> & Props, State> {
  state = {
    socket: null,
  };

  componentWillUnmount() {
    this.props.resetStepId();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.steps.length <= 0 && this.props.steps.length > 0) {
      const step = this.props.steps[0];
      this.props.switchStep(step.id, step.pieceId);
    }
  }
  componentDidMount() {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getRecipe(id);
    } else {
      this.props.resetRecipe();
    }
  }

  connectWebSocket = () => (
    io.connect('https://pi@keitalab-pi01.local:3000', {
      secure: true,
      query: {
        type: 'user',
      },
    })
  )

  forwardStep = () => {
    const step = this.props.steps.find(s => s.id === this.props.stepId);
    const nextStep = this.props.steps.find(s => step.nextId === s.id);
    this.props.switchStep(nextStep.id, nextStep.pieceId);
  }

  render() {
    const step = this.props.steps.find(step => step.id === this.props.stepId);
    const selectPiece = () => {
      const content = JSON.parse(step.content);
      switch (step.pieceId) {
        case FF_ID:
          return (
            <FFPlay
              step={content}
              socket={this.state.socket}
              forwardStep={this.forwardStep}
              id={step.id}
            />
          );
        case TEXT_ID:
          return <TextPlay step={content} />;
        case TASTE_ID:
          return <TastePlay step={content} />;
        default:
          break;
      }
    };
    const currentPiece = step ? selectPiece() : null;
    return (
      <div>
        <Main>
          <TopPanel>{currentPiece}</TopPanel>
          <StepsPanel
            steps={this.props.steps}
            stepOnClick={(stepId, pieceId) => this.props.switchStep(stepId, pieceId)} />
        </Main>
      </div>
    );
  }
}
