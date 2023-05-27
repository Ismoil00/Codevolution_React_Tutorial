import { useReducer, useEffect } from "react";
import axios from "axios";

function UseReducer_FetchingData() {
  const [state, dispatch] = useReducer(FetchingData, {
    loading: true,
    post: "",
    error: "",
  });

  function FetchingData(state, action) {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.message,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: "",
          error: action.message,
        };
    }
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", message: data.data.title });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", message: err });
      });
  }, []);

  return (
    <div>
      <p>Fetching Data with useReducer:</p>
      {state.loading ? "...Loading" : state.post}
      {state.error.message ?? null}
    </div>
  );
}

export default UseReducer_FetchingData;
