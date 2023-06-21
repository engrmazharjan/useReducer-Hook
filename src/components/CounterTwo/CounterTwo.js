// * Complex State & Action - Like Redux Pattern
import "./CounterTwo.css";
import React, { Fragment, useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <div>
        <h1>useReducer (Complex Counter)</h1>
        <h3>First Counter: {count.firstCounter}</h3>
        <h3>Second Counter: {count.secondCounter}</h3>

        <div className="first-pair-of-btns">
          <button onClick={() => dispatch({ type: "increment", value: 1 })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
            Decrement
          </button>

          <button onClick={() => dispatch({ type: "increment", value: 5 })}>
            Increment 5
          </button>
          <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
            Decrement 5
          </button>
        </div>

        <div className="second-pair-of-btns">
          <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
            Increment Counter 2
          </button>
          <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
            Decrement Counter 2
          </button>
          <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
            Increment Counter 2 By 5
          </button>
          <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
            Decrement Counter 2 By 5
          </button>
        </div>

        <button className="reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </Fragment>
  );
};

export default CounterTwo;
