import React, { useState, useCallback } from "react";

// Main Component about useCallback - useCallback is used to optimize performance:
// GOOD USE of useCallback: 1) when passing down callback functions to child components that have dependencies;
function UseCallback() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  // Simply accept that rendering creates new function objects. So, in this case increaseAge function variable has always the same "Callback Function Object" between renderings of this "UseCallback" component.
  const increaseAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <DisplayCount text={"Age"} count={age} />
      <Button count={age} onClick={increaseAge} />
      <DisplayCount text={"Salary"} count={salary} />
      <Button count={salary} onClick={increaseSalary} />
    </div>
  );
}

export default UseCallback;

// Title Component:
export const Title = () => {
  console.log("Title");

  return <h3>useCallback runs only...</h3>;
};

// Display Component:
export const DisplayCount = ({ text, count }) => {
  console.log(text, count);

  return (
    <>
      <p>
        {text} is: {count}
      </p>
    </>
  );
};

// Button Component:
export const Button = ({ count, onClick }) => {
  console.log("Button: ", count);

  return (
    <>
      <button onClick={onClick}>Increase {count}</button>
    </>
  );
};
