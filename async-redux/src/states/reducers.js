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