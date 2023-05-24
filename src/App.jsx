import "./App.css";
import { useEffect, useState } from "react";
import Func_Comp from "./components/FunctionalComp";
import Class_Comp from "./components/ClassComp";
import all from "./cssModules/button.module.css";
import ClassLifecycle from "./components/ClassLifeCycle";
import MultipleUseReducer from "./components/multipleUseReducer";
import ObjectUseReducer from "./components/objectUseReducer";
import Stopwatch from "./components/Timer";
import ParentContext from "./components/ContextParent";

function App() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function recordMouseMove(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times!`;
    window.addEventListener("mousemove", recordMouseMove);
    // console.log(`Coordinates: X-${x}, Y-${y}`);
  });

  return (
    <>
      <Func_Comp name="Comp">
        <p>
          X - {x}, Y - {y}
        </p>
        <button
          className={all.error}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click me
        </button>
      </Func_Comp>
      <Stopwatch />
      <ParentContext />
      <MultipleUseReducer />
      <ObjectUseReducer />
      <hr />
      <Class_Comp name="Comp">
        <p>Class Component Child Property</p>
      </Class_Comp>
      <ClassLifecycle />
    </>
  );
}

export default App;
