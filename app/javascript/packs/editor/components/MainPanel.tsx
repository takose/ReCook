import * as React from 'react';
import { main as Main } from '../styles/MainPanel';

export interface Props {
}

class MainPanel extends React.Component<Props, object> {
  render() {
    return (
      <Main>
        MainPanel
      </Main>
    );
  }
}

export default MainPanel;
