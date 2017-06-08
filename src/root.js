/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../data.json';

import Quiz from './components/Quiz';

import globalStyles from './global.css';

ReactDOM.render(
  <Quiz data={Data} />,
  document.getElementById('root'),
);
