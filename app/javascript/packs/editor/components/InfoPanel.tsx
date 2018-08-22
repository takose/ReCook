import * as React from 'react';
import PieceList from '../containers/PieceList';

export interface Props {
}

class InfoPanel extends React.Component<Props, object> {
  render() {
    return (
      <div className="info-panel">
        <PieceList />
      </div>
    );
  }
}

export default InfoPanel;
