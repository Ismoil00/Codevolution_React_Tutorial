import React, { useRef, useEffect, useState } from "react";

// we use useRef hook to access the DOM Nodes directly within functional component;
// useRef is used for any mutable elements as well (eventhough it isn't DOM element);

const UseRefHook = () => {
  const [timer, setTimer] = useState(0);
  const inputRef = useRef(null);
  const intervalRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>Timer: {timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default UseRefHook;
