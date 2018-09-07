import 'babel-polyfill';
import * as React from 'react';
import { StepState } from '../../../types';
import { RouteComponentProps } from 'react-router';
import StepsPanel from '../../common/StepsPanel/components/StepsPanel';
import {
  main as Main,
  topPanel as TopPanel,
} from '../styles/Player';

export interface Props {
}

export default class Player extends React.Component<RouteComponentProps<any>, object> {
  state = {
    steps: [],
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    fetch(`/api/steps?recipe_id=${id}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({ steps: res });
      });
  }

  render() {
    return (
      <div>
        <Main>
          <TopPanel></TopPanel>
          <StepsPanel steps={this.state.steps} />
        </Main>
      </div>
    );
  }
}
