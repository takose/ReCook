import * as ReactDOM from 'react-dom'
import * as React from 'react';
import SideBar from './containers/SideBar';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('explore')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<SideBar {...data} />, node)
})
