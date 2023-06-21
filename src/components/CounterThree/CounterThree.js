// * Simple State & Action
import "./CounterThree.css";
import React, { Fragment, useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <div>
        <div className="first-counter">
          <h1>useReducer (Multiple useReducers)</h1>

          <h3>Counter: {count}</h3>
          <button className="increment" onClick={() => dispatch("increment")}>
            Increment
          </button>
          <button className="decrement" onClick={() => dispatch("decrement")}>
            Decrement
          </button>
          <button className="reset" onClick={() => dispatch("reset")}>
            Reset
          </button>
        </div>

        <div className="second-counter">
          <h3>Counter: {countTwo}</h3>
          <button
            className="increment"
            onClick={() => dispatchTwo("increment")}
          >
            Increment
          </button>
          <button
            className="decrement"
            onClick={() => dispatchTwo("decrement")}
          >
            Decrement
          </button>
          <button className="reset" onClick={() => dispatchTwo("reset")}>
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CounterThree;
