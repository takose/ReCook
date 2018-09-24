import 'babel-polyfill';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FFState } from '../../../../types';
import {
  main as Main,
  modeSelector as ModeSelector,
  modeSelectorList as ModeSelectorList,
  form as Form,
  input as Input,
  itemWrapper as ItemWrapper,
  add as Add,
  label as Label,
  deleteButton as DeleteButton,
} from '../../style';

export interface Props {
  createOrUpdate({}): void;
  deleteStep(): void;
  step?: FFState;
  id: number;
}

export default class FF extends React.Component<Props, FFState> {
  state = {
    mode: 0,
    power: 0,
    time: 0,
    temperature: 0,
  };

  componentDidMount() {
    if (this.props.step) {
      this.setState({ ...this.props.step });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ ...this.props.step });
    }
  }

  timeOnChange = e => this.setState({ time: parseInt(e.target.value, 10) });
  powerOnChange = e => this.setState({ power: parseInt(e.target.value, 10) });
  temperatureOnChange = e => this.setState({ temperature: parseInt(e.target.value, 10) });
  modeOnChanged = (mode: number) => this.setState({ mode });

  render() {
    const { createOrUpdate, id } = this.props;
    const text = id ?
      <div><FontAwesomeIcon icon={faCheck} /> &nbsp; Update</div> :
      <div><FontAwesomeIcon icon={faPlus} /> &nbsp; Add</div>;
    const formItem = (title, min, max, value, onChange, unit) => (
      <ItemWrapper>
        <Label>{title}</Label>
        <Input
          type="number" min={min} max={max}
          value={value}
          onChange={onChange}
        />{unit}
        </ItemWrapper>
    );
    const form = () => {
      const { temperature, power, time } = this.state;
      const tempDom = formItem('温度', 0, 200, temperature, this.temperatureOnChange, '℃');
      const powerDom = formItem('火力', -1, 6, power, this.powerOnChange, '');
      const timeDom = formItem('時間', 0, null, time, this.timeOnChange, 'sec');
      switch (this.state.mode) {
        case 0:
          return <Form>{tempDom}{timeDom}</Form>;
        case 1:
          return <Form>{tempDom}{powerDom}</Form>;
        case 2:
          return <Form>{powerDom}{timeDom}</Form>;
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
            createOrUpdate({ power, temperature, time, mode });
            this.setState({
              temperature: 0,
              power: 0,
              time: 0,
            });
          }}>
          {text}
        </Add>
        {this.props.id ? (
          <DeleteButton
            onClick={this.props.deleteStep}
          >
          delete
          </DeleteButton>
        ) : ''}
      </Main>
    );
  }
}
