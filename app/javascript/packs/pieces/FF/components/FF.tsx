import 'babel-polyfill';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CurrentState, StepState, FFState } from '../../../../types';
import {
  main as Main,
  modeSelector as ModeSelector,
  modeSelectorList as ModeSelectorList,
  form as Form,
  input as Input,
  itemWrapper as ItemWrapper,
  add as Add,
  label as Label,
} from '../../style';

interface State {
  power: number;
  temperature: number;
  time: number;
  mode: number;
}

export interface Props {
  current: CurrentState;
  steps: StepState[];
  ffSteps: FFState[];
  createFFStep(power: number, temperature: number, time: number, mode: number): void;
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
  timeOnChange = e => this.setState({ time: parseInt(e.target.value, 10) });
  powerOnChange = e => this.setState({ power: parseInt(e.target.value, 10) });
  temperatureOnChange = e => this.setState({ temperature: parseInt(e.target.value, 10) });
  modeOnChanged = (mode: number) => this.setState({ mode });

  render() {
    const {
      current,
      createFFStep,
    } = this.props;
    const form = () => {
      const temp = (
        <ItemWrapper>
          <Label>温度</Label>
          <Input
            type="number" min={0} max={200}
            placeholder="Temperature"
            value={this.state.temperature}
            onChange={this.temperatureOnChange}
            innerRef={e => this.temperatureDom = e}
          /> ℃
        </ItemWrapper>
      );
      const power = (
        <ItemWrapper>
          <Label>火力</Label>
          <Input
            type="number" min={0} max={6}
            placeholder="Power"
            value={this.state.power}
            onChange={this.powerOnChange}
            innerRef={e => this.powerDom = e}
          />
        </ItemWrapper>
      );
      const time = (
        <ItemWrapper>
          <Label>時間</Label>
          <Input
            type="number" min={0}
            placeholder="Time"
            value={this.state.time}
            onChange={this.timeOnChange}
            innerRef={e => this.timeDom = e}
          /> sec
        </ItemWrapper>
      );
      switch (this.state.mode) {
        case 0:
          return <Form>{temp}{time}</Form>;
        case 1:
          return <Form>{temp}{power}</Form>;
        case 2:
          return <Form>{power}{time}</Form>;
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
            温度 & 時間
          </ModeSelector>
          <ModeSelector
            primary={this.state.mode === 1}
            onClick={() => this.modeOnChanged(1)}>
            温度 & 火力
          </ModeSelector>
          <ModeSelector
            primary={this.state.mode === 2}
            onClick={() => this.modeOnChanged(2)}>
            火力 & 時間
          </ModeSelector>
        </ModeSelectorList>
        {form()}
        <Add
          onClick={() => {
            const { power, temperature, time, mode } = this.state;
            createFFStep(power, temperature, time, mode);
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
