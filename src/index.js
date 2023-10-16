import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/redux/reducer';
import App from './App';
import { createRoot } from 'react-dom';

const store = createStore(reducer);

const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>
);
