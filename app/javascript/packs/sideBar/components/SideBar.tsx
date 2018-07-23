import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
}

class SideBar extends React.Component<Props, object> {
  render() {
    return (
      <div className="sidebar">
        <Link to="/explore">Explore</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/player">Player</Link>
      </div>
    );
  }
}

export default SideBar;
