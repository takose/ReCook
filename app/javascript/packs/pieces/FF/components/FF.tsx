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
  step as Step,
} from '../styles/FF';

export interface Props {
  current: CurrentState;
  steps: StepState[];
  ffSteps: FFState[];
  createRecipe(): void;
  createFFStep(): void;
  createStep(stepId: number): void;
}

export default class FF extends React.Component<Props, object> {
  state = {
    mode: 0,
  };

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
          />
        </InputWrapper>
      );
      const time = (
        <InputWrapper>
          <Input
            type="number"
            min={0}
            placeholder="Time"
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
            createFFStep();
          }}>
          <FontAwesomeIcon icon={faPlus} />&nbsp; Add
        </Add>
      </Main>
    );
  }
}
