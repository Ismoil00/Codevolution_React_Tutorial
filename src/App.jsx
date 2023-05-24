import "./App.css";
import Func_Comp from "./components/FunctionalComp";
import Class_Comp from "./components/ClassComp";
import all from "./cssModules/button.module.css";
import ClassLifecycle from "./components/ClassLifeCycle";
import MultipleUseReducer from "./components/multipleUseReducer";
import ObjectUseReducer from "./components/objectUseReducer";

function App() {
  return (
    <>
      <Func_Comp name="Comp">
        <button className={all.error}>Click me</button>
      </Func_Comp>
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
