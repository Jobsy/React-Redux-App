import React from 'react';
import { combineReducers, createStore } from "redux";
import {Provider} from "react-redux"

import './App.css';
import Counter from './components/Counter';
import * as reducers from './states/reducers';

function App() {

  const monsterReducer = combineReducers({
    count: reducers.counterReducer,
  });

  const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return (
    <Provider store={store}>
    <div className="App">
      <h1>Async Redux - React Redux App</h1>
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
