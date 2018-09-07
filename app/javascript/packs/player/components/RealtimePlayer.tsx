import 'babel-polyfill';
import * as React from 'react';
import {
  main as Main,
} from '../styles/Player';

export interface Props {
}

export default class RealtimePlayer extends React.Component<Props, object> {
  render() {
    return (
      <Main>
      </Main>
    );
  }
}
