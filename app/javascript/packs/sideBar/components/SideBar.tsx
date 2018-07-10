import * as React from 'react';

export interface Props {
}

class SideBar extends React.Component<Props, object> {
  render() {
    return (
      <div className="sidebar">
      <button>Explore</button>
      <button>Editor</button>
      <button>Player</button>
      </div>
    );
  }
}

export default SideBar;
