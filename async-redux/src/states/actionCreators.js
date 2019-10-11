
import axios from 'axios';
import * as types from "./actionTypes";


export function increment() {
  return {
    type: types.INCREMENT,
  }
}

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function reset() {
  return {
    type: types.RESET,
  }
}

export const getPokemon = () => dispatch => {
  dispatch({ type: types.FETCH_POKEMON_START });
  axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>
      dispatch({ type: types.FETCH_POKEMON_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: types.FETCH_POKEMON_FAIL, payload: err }));
};
