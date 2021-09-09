import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);