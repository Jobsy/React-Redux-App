
import React from 'react';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from "react-redux"

import './App.css';
import Counter from './components/Counter';
import * as reducers from './states/reducers';
import PokemonList from './components/PokemonList';


function App() {

  const monsterReducer = combineReducers({
    count: reducers.counterReducer,
    rootReducer: reducers.reducer,
  });

  const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Async Redux - React Redux App</h1>
        <Counter />
        <PokemonList />
      </div>
    </Provider>
  );
}

export default App;
