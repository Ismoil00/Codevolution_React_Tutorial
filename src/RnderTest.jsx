import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return initialState;
    default: return state;
  }
};

const RnderTest = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("Component Renders", count);

  return (
    <div>
      <button onClick={() => dispatch("Reset")}>Set to 0</button>
      <button onClick={() => dispatch("Increase")}>Increase</button>
      <button onClick={() => dispatch("Decrease")}>Decrease</button>
    </div>
  );
};

export default RnderTest;
