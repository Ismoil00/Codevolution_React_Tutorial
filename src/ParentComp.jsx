import { useCallback, useState, createContext } from "react";
import { MemoizedChildComp } from "./ChildComp";

export const countContext = createContext();

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
      <countContext.Provider value={count}>
        <MemoizedChildComp name={name} >
          {/* ***if we wrap a plain text in an HTML tag - then no need to use React.memo() since an object is being passed down to child component and therefore memoization doesn't help!*** */}
          {/* <strong> Hello </strong> */}
          Hello
        </MemoizedChildComp>
        {/* We can pass child component through Parent component to the current component to omit child rendering */}
        {/* {children} */}
      </countContext.Provider>
    </div>
  );
};

export default ParentComp;
