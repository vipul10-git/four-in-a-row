import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../src/client/pages/appContainer';
import '../src/assets/css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

