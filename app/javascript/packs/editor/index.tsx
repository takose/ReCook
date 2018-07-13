import * as ReactDOM from 'react-dom'
import * as React from 'react';
import Editor from './containers/Editor';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('editor')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<Editor {...data} />, node)
})
