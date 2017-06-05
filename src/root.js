/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import FirstComponent from './components/firstComponent';

// import store from './store';

ReactDOM.render(
  <FirstComponent />,
  document.getElementById('root'),
);
