
import * as types from "./actionTypes";


const initialValueCount = 0;
export function counterReducer(count = initialValueCount, action) {

  switch (action.type) {
    case types.INCREMENT:
      return count + 1;

    case types.DECREMENT:
      return count - 1;

    case types.RESET:
      return count = 0;

    default:
    return  count;
  }
}



const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case types.FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case types.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ''
      };
    case types.FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}