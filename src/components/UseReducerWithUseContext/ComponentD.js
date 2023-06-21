import React, { Fragment, useContext } from "react";
import { CountContext } from "../../App";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <Fragment>
      <div>
        <h1>Component D: {countContext.countState}</h1>

        <button
          className="increment"
          onClick={() => countContext.countDispatch("increment")}
        >
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => countContext.countDispatch("decrement")}
        >
          Decrement
        </button>
        <button
          className="reset"
          onClick={() => countContext.countDispatch("reset")}
        >
          Reset
        </button>
      </div>
    </Fragment>
  );
};

export default ComponentD;
