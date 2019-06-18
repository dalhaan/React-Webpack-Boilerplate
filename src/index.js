import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimall React Webpack Babel Setup';

const App = () => <div>{title}</div>;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
