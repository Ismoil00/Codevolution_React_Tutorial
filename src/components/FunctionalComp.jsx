import React, { useState, useRef } from "react";
import all from "../cssModules/button.module.css";

const FunctionalComponent = (props) => {
  // console.log(props)
  const [names, setNames] = useState(["somon", "sorbon", "umed"]);
  const ref = useRef();

  const pushToStart = () => {
    const val = ref.current.value;
    setNames((prev) => [val, ...prev]);
    ref.current.value = "";
  };

  const pushToEnd = () => {
    const val = ref.current.value;
    setNames((prev) => [...prev, val]);
    ref.current.value = "";
  };

  const reverseArray = () => {
    const reversed = [...names];
    setNames(reversed.reverse());
  };

  return (
    <>
      <h1>Funtional {props.name}</h1>
      {props.children}
      {names.map((each, index) => {
        return (
          <React.Fragment key={index}>
            <p>
              {index}: {each}
            </p>
          </React.Fragment>
        );
      })}
      <input type="text" ref={ref} />
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <button className={all.primary} onClick={pushToEnd}>
          Push
        </button>
        <button className={all.success} onClick={pushToStart}>
          Unshift
        </button>
        <button className={all.error} onClick={reverseArray}>
          Reverse
        </button>
      </div>
    </>
  );
};

export default FunctionalComponent;
