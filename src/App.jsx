import "./App.css";
import Func_Comp from "./components/FunctionalComp";
import Class_Comp from "./components/ClassComp";

function App() {

  return (
    <>
      <Func_Comp name="Comp" >
        <button >Click me</button>
      </Func_Comp>
      <hr />
      <Class_Comp name="Comp">
        <p>Class Component Child Property</p>
      </Class_Comp>
    </>
  );
}

export default App;
