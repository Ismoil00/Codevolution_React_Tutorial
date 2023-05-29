import React from "react";

// Title Component:
const Title = () => {
  console.log("Title");

  return <h3>useCallback runs only...</h3>;
};

  /* 
  Optimizing Component Memoization: React's memoization techniques, such as React.memo() or PureComponent, 
  compare the props of a component to determine if it needs to re-render. If the props include functions that are not memoized, 
  they will always be considered different, triggering unnecessary re-renders.
  */
export default React.memo(Title);
