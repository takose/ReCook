import 'babel-polyfill';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CurrentState, StepState, FFState } from '../../../../types';
import {
  main as Main,
  modeSelector as ModeSelector,
  modeSelectorList as ModeSelectorList,
  form as Form,
  input as Input,
  inputWrapper as InputWrapper,
  add as Add,
} from '../styles/FF';

interface State {
  power?: number;
  temperature: number;
  time: number;
  mode: number;
}

export interface Props {
  current: CurrentState;
  steps: StepState[];
  ffSteps: FFState[];
  createRecipe(): void;
  createFFStep(power: number, temperature: number, time: number): void;
  createStep(stepId: number): void;
}

export default class FF extends React.Component<Props, State> {
  private timeDom;
  private temperatureDom;
  private powerDom;
  state = {
    mode: 0,
    power: 0,
    time: 0,
    temperature: 0,
  };

  reset = () => {
    switch (this.state.mode) {
      case 0:
        this.temperatureDom.value = 0;
        this.timeDom.value = 0;
        break;
      case 1:
        this.temperatureDom.value = 0;
        this.powerDom.value = 0;
        break;
      case 2:
        this.powerDom.value = 0;
        this.timeDom.value = 0;
        break;
      default:
        break;
    }
  }
  timeOnChange = (e) => {
    this.setState({
      time: e.target.value,
    });
  }

  powerOnChange = (e) => {
    this.setState({
      power: e.target.value,
    });
  }

  temperatureOnChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  }

  modeOnChanged = (mode: number) => {
    this.setState({ mode });
  }
  render() {
    const {
      current,
      createRecipe,
      createFFStep,
      createStep,
      ffSteps,
      steps,
    } = this.props;
    const form = () => {
      const temp = (
        <InputWrapper>
          <Input
            type="number"
            min={0}
            max={200}
            placeholder="Temperature"
            value={this.state.temperature}
            onChange={this.temperatureOnChange}
            innerRef={e => this.temperatureDom = e}
          /> ℃
        </InputWrapper>
      );
      const power = (
        <InputWrapper>
          <Input
            type="number"
            min={0}
            max={6}
            placeholder="Power"
            value={this.state.power}
            onChange={this.powerOnChange}
            innerRef={e => this.powerDom = e}
          />
        </InputWrapper>
      );
      const time = (
        <InputWrapper>
          <Input
            type="number"
            min={0}
            placeholder="Time"
            value={this.state.time}
            onChange={this.timeOnChange}
            innerRef={e => this.timeDom = e}
          /> sec
        </InputWrapper>
      );
      switch (this.state.mode) {
        case 0:
          return (
            <Form>
              {temp}
              {time}
            </Form>
          );
        case 1:
          return (
            <Form>
              {temp}
              {power}
            </Form>
          );
        case 2:
          return (
            <Form>
              {power}
              {time}
            </Form>
          );
        default:
          break;
      }
    };

    return (
      <Main>
        <ModeSelectorList>
          <ModeSelector
            primary={this.state.mode === 0}
            onClick={() => this.modeOnChanged(0)}>
            Temperature & Time
          </ModeSelector>
          <ModeSelector
            primary={this.state.mode === 1}
            onClick={() => this.modeOnChanged(1)}>
            Temperature & Power
          </ModeSelector>
          <ModeSelector
            primary={this.state.mode === 2}
            onClick={() => this.modeOnChanged(2)}>
            Power & Time
          </ModeSelector>
        </ModeSelectorList>
        {form()}
        <Add
          onClick={() => {
            if (current.recipeId === null) {
              createRecipe();
            }
            const { power, temperature, time } = this.state;
            createFFStep(power, temperature, time);
            this.setState({
              temperature: 0,
              power: 0,
              time: 0,
            });
            this.reset();
          }}>
          <FontAwesomeIcon icon={faPlus} />&nbsp; Add
        </Add>
      </Main>
    );
  }
}
