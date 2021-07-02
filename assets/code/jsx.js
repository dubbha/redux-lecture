// index.html
<div id="root"></div>

// index.js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('span', null, 'Hello World'),
  document.getElementById('root')
);