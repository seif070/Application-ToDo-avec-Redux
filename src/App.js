import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/redux/reducer'; 
import AjouterTache from './components/AjouterTache';
import ListeTache from './components/ListeTache';

const store = createStore(reducer); 

const App = () => {
  return (
    <Provider store={store}> 
      <div>
        <h1>Application ToDo avec Redux</h1>
        <AjouterTache />
        <ListeTache />
      </div>
    </Provider>
  );
};

export default App;
