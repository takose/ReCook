import 'babel-polyfill';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { StepState } from '../../../types';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';
import {
  main as Main,
  topPanel as TopPanel,
} from '../styles/Player';

export interface Props {
  steps: StepState[];
  getRecipe(id: number): void;
  switchStep(id: number): void;
}

export default class Player extends React.Component<RouteComponentProps<any> & Props, object> {
  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getRecipe(id);
    }
  }

  render() {
    return (
      <div>
        <Main>
          <TopPanel></TopPanel>
          <StepsPanel steps={this.props.steps} />
        </Main>
      </div>
    );
  }
}
