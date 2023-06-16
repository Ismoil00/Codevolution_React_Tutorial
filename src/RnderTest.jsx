import { useReducer, useState } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "Increase":
//       return state + 1;
//     case "Decrease":
//       return state - 1;
//     case "Reset":
//       return initialState;
//     default: return state;
//   }
// };

const user = ["ismoil", 25];

const RnderTest = () => {
  // const [count, dispatch] = useReducer(reducer, initialState);
  const [person, setPerson] = useState(user);

  console.log("Component Renders");

  const change = () => {
    const newPerson = [];
    newPerson.push("Sorbon")
    newPerson.push(30)
    setPerson(newPerson);
  };

  return (
    <div>
      {/* <button onClick={() => dispatch("Reset")}>Set to 0</button>
      <button onClick={() => dispatch("Increase")}>Increase</button> */}
      <button onClick={change}>Object Reference</button>
      {person.map((item) => (
        <>
          <p>{item}</p>
        </>
      ))}
    </div>
  );
};

export default RnderTest;
