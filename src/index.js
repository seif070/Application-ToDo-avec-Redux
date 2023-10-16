import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import App from './App'; 
import { render } from 'react-dom';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
