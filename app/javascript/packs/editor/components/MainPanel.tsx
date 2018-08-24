import * as React from 'react';
import { main as Main } from '../styles/MainPanel';
import FF from '../../pieces/FF/components/FF';

export interface Props {
}

class MainPanel extends React.Component<Props, object> {
  render() {
    return (
      <Main>
        <FF />
      </Main>
    );
  }
}

export default MainPanel;
