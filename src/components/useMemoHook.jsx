import React, { useState, useMemo } from "react";
import all from "../cssModules/button.module.css";

const UseMemoHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  /* we use useMemo to save the changes of Expensive Functions so that not to run them
   after each render that are caused by non-relevant states changes/events run */ const isEven =
    useMemo(() => {
      console.log("isEven() called");
      let i = 0;
      while (i < 2000000000) i++;
      return countOne % 2 === 0;
    }, [countOne]);

  return (
    <div>
      <button className={all.primary} onClick={() => setCountOne((p) => p + 1)}>
        Increase {countOne}
      </button>
      <span style={{ marginLeft: "1rem" }}>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button
        style={{ marginTop: "1rem" }}
        className={all.primary}
        onClick={() => setCountTwo((p) => p + 1)}
      >
        Increase {countTwo}
      </button>
    </div>
  );
};

export default UseMemoHook;
