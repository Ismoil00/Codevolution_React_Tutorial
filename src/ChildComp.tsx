import React, { useState, useContext } from "react";
import { countContext } from "./ParentComp";

export const ChildComp = ({ children, name }) => {
  const [count, setcount] = useState(0);

  console.log("Child");

  return (
    <div>
      {children} {name}
      <button onClick={() => setcount((p) => p + 1)}>Child by 1</button>
      <button onClick={() => setcount(0)}>Child 0</button>
      <button onClick={() => setcount(5)}>Child 5</button>
      <ChildA />
    </div>
  );
};

// this is another way of Optimizing irrelevant Parent-Child Renders:
// * React.memo() uses memory for comparison - so it takes time as well;
/* * Based on above fast wrapping every component in React.memo() is no a good idea
 since in this scenario - the comparison makes rendering process longer rather than not using React.memo(); */
export const MemoizedChildComp = React.memo(ChildComp);

export const ChildA = () => {
  console.log("childA");
  return <ChildB />;
};

export const ChildB = () => {
  console.log("childB");
  return <ChildC />;
};

export const ChildC = () => {
  const count = useContext(countContext);
  console.log("childC");
  return <div>Child C props pass through useContext: {count}</div>;
};
