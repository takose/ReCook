import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Explore from './containers/Explore';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('explore');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(<Explore {...data} />, node);
});
