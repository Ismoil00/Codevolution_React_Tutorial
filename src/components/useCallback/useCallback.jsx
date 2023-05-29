import React, { useState, useCallback } from "react";
import Title from "./Title";
import Counts from "./Counts";
import Buttons from "./Buttons";

// Main Component about useCallback - useCallback is used to optimize performance:
function UseCallback() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  // GOOD USE of useCallback Hook:
  /* Simply accept that rendering creates new function objects:
  When passing callback functions to child components, using useCallback() ensures that the reference to the callback remains the same
  as long as the dependencies haven't changed. */
  const increaseAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary]);

  // BAD USE of useCallback Hook:
  /* 
  Using useCallback() on every function, especially those without dependencies, 
  can lead to unnecessary complexity and potential performance issues - since (in below example) 
  with or without useCallback JS allocates memory for function definition and + 
  useCallback is another line of code that requires time to be examined by the computer. Even if, provided with a dependency
  or dependencies React also has to hang on to a reference to the dependencies for this equality check - which means memoezation 
  deos not help with performance optimization so much. 
  */
  const consoleLog = useCallback(
    () => () => {
      console.log("useCallback");
    },
    []
  );

  return (
    <div>
      <Title />
      <Counts text={"Age"} count={age} />
      <Buttons count={age} onClick={increaseAge} />
      <Counts text={"Salary"} count={salary} />
      <Buttons count={salary} onClick={increaseSalary} />
    </div>
  );
}

export default UseCallback;
