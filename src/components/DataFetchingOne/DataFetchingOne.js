import "./DataFetchingOne.css";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setError("Something Went Wrong!");
      });
  }, []);
  return (
    <Fragment>
      <div className="data-fetching-one">
        {loading
          ? "Loading"
          : post && (
              <>
                {post.title ? <label>Title</label> : ""}
                <h3>{post.title}</h3>

                {post.body ? <label>Body</label> : ""}
                <p>{post.body}</p>
              </>
            )}
        {error ? error : null}
      </div>
    </Fragment>
  );
};

export default DataFetchingOne;
