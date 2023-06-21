import "./App.css";
import { Fragment, createContext, useReducer } from "react";
import CounterOne from "./components/CounterOne/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";
import CounterThree from "./components/CounterThree/CounterThree";
import ComponentA from "./components/UseReducerWithUseContext/ComponentA";
import ComponentB from "./components/UseReducerWithUseContext/ComponentB";
import ComponentC from "./components/UseReducerWithUseContext/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo/DataFetchingTwo";

export const CountContext = createContext();
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="App">
          {/* <CounterOne /> */}
          {/* <CounterTwo /> */}
          {/* <CounterThree /> */}

          {/* useReducer With useContext */}
          {/* <div>
            <h1>useReducer With useContext </h1>
            <h3>Counter: {count}</h3>
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </div> */}

          {/* Data Fetching With useState*/}
          {/* <DataFetchingOne /> */}
          <DataFetchingTwo />
        </div>
      </CountContext.Provider>
    </Fragment>
  );
}

export default App;
