import React from "react";

// Button Component:
const Button = ({ count, onClick }) => {
    console.log("Button: ", count);
  
    return (
      <>
        <button onClick={onClick}>Increase {count}</button>
      </>
    );
  };

  /* 
  Optimizing Component Memoization: React's memoization techniques, such as React.memo() or PureComponent, 
  compare the props of a component to determine if it needs to re-render. If the props include functions that are not memoized, 
  they will always be considered different, triggering unnecessary re-renders.
  */
  export default React.memo(Button);