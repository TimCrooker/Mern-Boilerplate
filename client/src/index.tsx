// #region Global Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// #endregion Global Imports

// #region Local Imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// #endregion Local Imports

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
