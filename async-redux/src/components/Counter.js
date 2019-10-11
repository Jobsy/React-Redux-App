import React from "react"
import { connect } from "react-redux"

import * as actionCreators from "../states/actionCreators";

export function Counter(props) {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      <h3>Counter Value: {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}


export default connect(
  state => state,
  actionCreators
)(Counter)