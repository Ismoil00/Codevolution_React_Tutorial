import React, { useReducer } from "react";
import all from "../cssModules/button.module.css";

const reducerFn = (curState, action) => {
  switch (action) {
    case "increase":
      return curState + 1;
    case "decrease":
      return curState - 1;
    case "resetOne":
      return 0;
    case "resetTwo":
      return 10;
    default:
      return curState;
  }
};

const MultipleUseReducer = () => {
  const [countOne, dispatchOne] = useReducer(reducerFn, 0);
  const [countTwo, dispatchTwo] = useReducer(reducerFn, 10);

  return (
    <div>
      <h3>useReducer Count 1 = {countOne}</h3>
      <h3>useReducer Count 2 = {countTwo}</h3>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button className={all.primary} onClick={() => dispatchOne("increase")}>
          Increase
        </button>
        <button className={all.primary} onClick={() => dispatchOne("decrease")}>
          Decrease
        </button>
        <button className={all.primary} onClick={() => dispatchTwo("increase")}>
          Increase
        </button>
        <button className={all.primary} onClick={() => dispatchTwo("decrease")}>
          Decrease
        </button>
        <button
          className={all.primary}
          onClick={() => {
            dispatchOne("resetOne");
            dispatchTwo("resetTwo");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MultipleUseReducer;
