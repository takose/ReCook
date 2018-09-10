import 'babel-polyfill';
import * as React from 'react';
import StepsPanel from '../../common/StepsPanel/containers/StepsPanel';
import {
  main as Main,
  topPanel as TopPanel,
} from '../styles/Player';

export interface Props {
}

export default class Player extends React.Component<Props, object> {
  render() {
    return (
      <div>
        <Main>
          <TopPanel></TopPanel>
          <StepsPanel />
        </Main>
      </div>
    );
  }
}
