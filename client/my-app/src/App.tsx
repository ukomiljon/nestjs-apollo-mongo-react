import React from 'react';
import Datasources from './components/Datasources';
import './App.css';

import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';


const storage = createStore(reducer)

function App() {
  return (
    <Provider store={storage}>
      <div className="App">
        <Datasources />
      </div>
    </Provider>
  );
}

export default App;
