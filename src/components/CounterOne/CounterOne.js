// * Simple State & Action
import "./CounterOne.css";
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

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <div>
        <h1>useReducer (Simple Counter)</h1>

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
    </Fragment>
  );
};

export default CounterOne;
