import 'babel-polyfill';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CurrentState, StepState, FFState } from '../../../types';
import {
  main as Main,
} from '../styles/Player';

export interface Props {
  steps: StepState[];
}

export default class FF extends React.Component<Props, object> {
  modeOnChanged = (mode: number) => {
    this.setState({ mode });
  }
  render() {
    const {
      steps,
    } = this.props;

    return (
      <Main>
      </Main>
    );
  }
}
