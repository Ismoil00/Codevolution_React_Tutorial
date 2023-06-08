import "./App.css";
import { useEffect, useState, createContext, useReducer } from "react";
import Func_Comp from "./components/FunctionalComp";
import Class_Comp from "./components/ClassComp";
import all from "./cssModules/button.module.css";
import ClassLifecycle from "./components/ClassLifeCycle";
import MultipleUseReducer from "./components/multipleUseReducer";
import ObjectUseReducer from "./components/objectUseReducer";
import Stopwatch from "./components/Timer";
import ParentContext from "./components/ContextParent";
import UseReducer_UseContext from "./components/useReducer_useContext";
import UseReducer_FetchingData from "./components/FetchingDataWith_useReducer";
import UseCallback from "./components/useCallback/useCallback";
import UseMemoHook from "./components/useMemoHook";
import UseRefHook from "./components/useRefHook";
import CustomHook from "./components/customHooks/customHook";

export const UseReducerContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // function recordMouseMove(e) {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // }

  // useEffect(() => {
  //   document.title = `You clicked ${count} times!`;
  //   window.addEventListener("mousemove", recordMouseMove);
  //   // console.log(`Coordinates: X-${x}, Y-${y}`);
  // });

  // useReducer + useContext;
  const [useReducerMessage, dispatch] = useReducer(
    displayMessage,
    "useReducer + useContext"
  );
  function displayMessage(curVal, action) {
    switch (action.click) {
      case "console":
        console.log(curVal);
        return action.text;
      case "alert":
        alert(curVal);
        return action.text;
      default:
        return curVal;
    }
  }

  return (
    <>
      {/* <Func_Comp name="Comp">
        <p>
          X - {x}, Y - {y}
        </p>
        <button
          className={all.error}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click me
        </button>
      </Func_Comp> */}
      <Stopwatch />
      <ParentContext />

      <p>-----------------------------------------------------------</p>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          textDecoration: "underline",
        }}
      >
        useReducer:
      </h2>
      <MultipleUseReducer />
      <ObjectUseReducer />
      <UseReducerContext.Provider
        value={{ onClickDispatch: dispatch, text: useReducerMessage }}
      >
        <UseReducer_UseContext />
      </UseReducerContext.Provider>
      <UseReducer_FetchingData />

      <p>-----------------------------------------------------------</p>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          textDecoration: "underline",
        }}
      >
        useCallback:
      </h2>
      <UseCallback />

      <p>-----------------------------------------------------------</p>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          textDecoration: "underline",
        }}
      >
        useMemo:
      </h2>
      <UseMemoHook />

      <p>-----------------------------------------------------------</p>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          textDecoration: "underline",
        }}
      >
        useRef:
      </h2>
      <UseRefHook />

      <p>-----------------------------------------------------------</p>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          textDecoration: "underline",
        }}
      >
        Custom Hook:
      </h2>
      <CustomHook />

      <hr />
      <Class_Comp name="Comp">
        <p>Class Component Child Property</p>
      </Class_Comp>
      <ClassLifecycle />
    </>
  );
}

export default App;
