import "./DataFetchingTwo.css";
import axios from "axios";
import React, { Fragment, useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_FAIL":
      return {
        loading: false,
        error: "Something Went Wrong!",
        post: {},
      };

    default:
      return state;
  }
};
const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAIL" });
      });
  }, []);

  return (
    <Fragment>
      <div className="data-fetching-two">
        {state.loading
          ? "Loading"
          : state.post && (
              <>
                {state.post.title ? <label>Title</label> : ""}
                <h3>{state.post.title}</h3>

                {state.post.body ? <label>Body</label> : ""}
                <p>{state.post.body}</p>
              </>
            )}
        {state.error ? state.error : null}
      </div>
    </Fragment>
  );
};

export default DataFetchingTwo;
