import * as React from 'react';
import InfoPanel from '../components/InfoPanel';

export interface Props {
}

class Editor extends React.Component<Props, object> {
  render() {
    return (
      <div className="Editor">
        <InfoPanel />
      </div>
    );
  }
}

export default Editor;
