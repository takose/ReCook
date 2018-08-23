import * as React from 'react';
import InfoPanel from './InfoPanel';
import MainPanel from './MainPanel';
import {
  main as Main,
} from '../styles/Editor';

export interface Props {
}

class Editor extends React.Component<Props, object> {
  render() {
    return (
      <Main>
        <InfoPanel />
        <MainPanel />
      </Main>
    );
  }
}

export default Editor;
