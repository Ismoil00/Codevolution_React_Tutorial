import React from "react";

// Display Component:
const Count = ({ text, count }) => {
    console.log(text, count);
  
    return (
      <>
        <p>
          {text} is: {count}
        </p>
      </>
    );
  };

  /* 
  Optimizing Component Memoization: React's memoization techniques, such as React.memo() or PureComponent, 
  compare the props of a component to determine if it needs to re-render. If the props include functions that are not memoized, 
  they will always be considered different, triggering unnecessary re-renders.
  */
  export default React.memo(Count);