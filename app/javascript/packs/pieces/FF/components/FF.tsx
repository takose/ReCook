import 'babel-polyfill';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as io from 'socket.io-client';
import DrawChart from './DrawChart';
import {
  workspace as Workspace,
  step as Step,
  steps as Steps,
  chart as Chart,
  rightColumn as RightColumn,
  select as Select,
  trash as Trash,
  addStep as AddStep,
  addStepButton as AddStepButton,
  plus as Plus,
  playButton as PlayButton,
} from '../styles/FF';

export default class FF extends React.Component {
  state = {
    steps: [
      {
        power: 0,
        time: 0,
      },
    ],
    activeStepId: 0,
    socket: null,
    isPlay: false,
  };

  componentDidMount() {
    this.setState({
      socket: this.connectWebSocket(),
    });
  }

  onTimeChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].time = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
  }

  onPowerChange = (e) => {
    const newStep = this.state.steps;
    newStep[this.state.activeStepId].power = parseInt(e.target.value, 10);
    this.setState({
      steps: newStep,
    });
  }

  connectWebSocket = () => (
    io('pi@keitalab-pi01.local:3000', {
      query: {
        type: 'user',
      },
    })
  )

  addStep = () => {
    this.setState({
      steps: [
        ...this.state.steps,
        {
          power: '0',
          time: '0',
        },
      ],
      isPlay: false,
    });
  }

  recipeSetRice = () => {
    this.setState({
      steps: [
        {
          time: 6,
          power: 4,
        },
        {
          time: 3,
          power: 3,
        },
        {
          time: 6,
          power: 2,
        },
        {
          time: 10,
          power: 0,
        },
      ],
    });
  }

  recipeSetUdon = () => {
    this.setState({
      steps: [
        {
          time: 6,
          power: 4,
        },
        {
          time: 3,
          power: 3,
        },
        {
          time: 1,
          power: 2,
        },
      ],
    });
  }

  changeActiveStep = (id) => {
    this.setState({
      activeStepId: id,
    });
  }

  playFF = async () => {
    let idx = 0;
    for (const step of this.state.steps) {
      await this.sendCommand(step, idx);
      idx = idx + 1;
    }
    console.log('**done steps**');
    this.state.socket.emit('users/state:update', {
      deviceId: 'ff',
      states: {
        power: '0',
        time: '0',
      },
    });
    this.setState({ isPlay: false });
  }

  sendCommand = (step, idx) => {
    const device = {
      id: idx,
      deviceId: 'ff',
      states: step,
    };
    this.state.socket.emit('users/state:update', device);
    this.state.socket.once('users/state:update/return', () => {
    });
    return new Promise((resolve) => {
      this.state.socket.once('users/ff/done', () => {
        this.state.socket.emit('users/ff/done/return');
        resolve();
      });
    });
  }

  deleteStep = (id) => {
    const { steps } = this.state;
    steps.splice(id, 1);
    this.setState({ steps });
  }

  render() {
    const isButtonActive = this.state.steps[this.state.steps.length - 1].time > 0;
    const forms = this.state.steps.map((step, idx) => (
      <Step
        onClick={() => this.changeActiveStep(idx)}
      >
        {`${idx + 1}. 強さ`}
        <Select
          type="number"
          min={0}
          max={6}
          value={step.power}
          onChange={this.onPowerChange}
        />
        で
        <Select
          type="number"
          min={0}
          value={step.time}
          onChange={this.onTimeChange}
        />
        分
        {
          (this.state.steps.length !== 1) ? (
            <Trash
              onClick={() => this.deleteStep(idx)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Trash>
          ) : null
        }
      </Step>
    ));
    const isPlayable = !this.state.isPlay && this.state.steps.length > 1;

    return (
      <Workspace>
        <Chart>
          <DrawChart steps={this.state.steps} />
        </Chart>
        <RightColumn>
          <Steps>
            {forms}
            <AddStep>
              Next
              <AddStepButton
              onClick={isButtonActive ? this.addStep : null}
              >
                <Plus>
                  <FontAwesomeIcon icon={faPlus} />
                </Plus>
              </AddStepButton>
            </AddStep>
          </Steps>
          <PlayButton
            onClick={isPlayable ? () => {
              this.setState({ isPlay: true });
              this.playFF();
            } : null}
          >
            PLAY
          </PlayButton>
        </RightColumn>
      </Workspace>
    );
  }
}
