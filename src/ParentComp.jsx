import { useState } from "react";
import { MemoizedChildComp } from "./ChildComp";

const ParentComp = (/* { children } */) => {
  const [count, setcount] = useState(0);
  const [name, changeName] = useState("Sorbon");

  console.log("Parent");

  return (
    <div>
      {count}
      <button onClick={() => setcount((p) => p + 1)}>Parent by 1</button>
      <button onClick={() => setcount(0)}>Parent 0</button>
      <button onClick={() => setcount(5)}>Parent 5</button>
      <button onClick={() => changeName("Ismoil")}>Change Name</button>
      <MemoizedChildComp name={name} />
      {/* {children} */}
    </div>
  );
};

export default ParentComp;
