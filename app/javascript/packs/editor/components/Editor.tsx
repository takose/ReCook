import * as React from 'react';
import PieceList from '../containers/PieceList';

export interface Props {
}

class Editor extends React.Component<Props, object> {
  render() {
    return (
      <div className="Editor">
        <PieceList />
      </div>
    );
  }
}

export default Editor;
