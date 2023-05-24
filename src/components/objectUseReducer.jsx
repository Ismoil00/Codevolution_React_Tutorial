import React, { useReducer } from "react";
import all from "../cssModules/button.module.css";

const reducerFn = (curState, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...curState,
        firstCounter: curState.firstCounter + action.value,
      };
    case "decrease":
      return {
        ...curState,
        firstCounter: curState.firstCounter - action.value,
      };
    case "increase2":
      return {
        ...curState,
        secondCounter: curState.secondCounter + action.value,
      };
    case "decrease2":
      return {
        ...curState,
        secondCounter: curState.secondCounter - action.value,
      };
    case "reset":
      return { firstCounter: 0, secondCounter: 5 };
    default:
      return curState;
  }
};

const ObjectUseReducer = () => {
  const [count, dispatch] = useReducer(reducerFn, {
    firstCounter: 0,
    secondCounter: 5,
  });

  return (
    <div>
      <h3>useReducer Count 3 = {count.firstCounter}</h3>
      <h3>useReducer Count 4 = {count.secondCounter}</h3>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          className={all.success}
          onClick={() => dispatch({ type: "increase", value: 1 })}
        >
          Increase
        </button>
        <button
          className={all.success}
          onClick={() => dispatch({ type: "decrease", value: 1 })}
        >
          Decrease
        </button>
        <button
          className={all.success}
          onClick={() => dispatch({ type: "increase2", value: 5 })}
        >
          Increase 5
        </button>
        <button
          className={all.success}
          onClick={() => dispatch({ type: "decrease2", value: 5 })}
        >
          Decrease 5
        </button>
        <button
          className={all.success}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ObjectUseReducer;
