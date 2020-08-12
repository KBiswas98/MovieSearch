import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './folder/redux/config/config';

ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
