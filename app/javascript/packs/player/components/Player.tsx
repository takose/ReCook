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

export interface Props {
  steps: StepState[];
  getRecipe(id: number): void;
  switchStep(id: number): void;
}

export interface State {
  socket:  SocketIOClient.Socket;
  currentStepId: number;
}
export default class Player extends React.Component<RouteComponentProps<any> & Props, State> {
  state = {
    currentStepId: this.props.steps[0].id,
    socket: null,
  };

  componentDidMount() {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getRecipe(id);
    }
  }

  connectWebSocket = () => (
    io('pi@keitalab-pi01.local:3000', {
      query: {
        type: 'user',
      },
    })
  )

  forwardStep = () => {
    const id = this.props.steps.find(step => step.id === this.state.currentStepId).nextId;
    this.setState({ currentStepId: id });
    this.props.switchStep(id);
  }

  render() {
    const step = this.props.steps.find(step => step.id === this.state.currentStepId);
    const selectPiece = () => {
      switch (step.pieceId) {
        case FF_ID:
          return (
            <FFPlay
              step={JSON.parse(step.content)}
              socket={this.state.socket}
              forwardStep={this.forwardStep}
            />
          );
        case TEXT_ID:
          // return <TextPlay />;
        case TASTE_ID:
          // return <TastePlay />;
        default:
          break;
      }
    };
    const currentPiece = selectPiece();
    return (
      <div>
        <Main>
          <TopPanel>{currentPiece}</TopPanel>
          <StepsPanel steps={this.props.steps} stepOnClick={this.props.switchStep} />
        </Main>
      </div>
    );
  }
}
