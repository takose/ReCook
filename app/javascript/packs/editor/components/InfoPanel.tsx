import * as React from 'react';
import PieceList from '../containers/PieceList';
import { main as Main } from '../styles/InfoPanel';

export interface Props {
}

class InfoPanel extends React.Component<Props, object> {
  render() {
    return (
      <Main>
        <PieceList />
      </Main>
    );
  }
}

export default InfoPanel;
