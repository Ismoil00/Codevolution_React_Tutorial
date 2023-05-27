import { useContext } from "react";
import { UseReducerContext } from "../App";
import all from "../cssModules/button.module.css";

const UseReducer_UseContext = () => {
  const useReducerContext = useContext(UseReducerContext);

  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      {useReducerContext.text}
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          flexFlow: "row nowrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button
          className={all.error}
          onClick={() =>
            useReducerContext.onClickDispatch({
              click: "console",
              text: "Console Button was clicked",
            })
          }
        >
          Console Log Message
        </button>
        <button
          className={all.error}
          onClick={() =>
            useReducerContext.onClickDispatch({
              click: "alert",
              text: "Alert Button was clicked",
            })
          }
        >
          Alert Message
        </button>
      </div>
    </div>
  );
};

export default UseReducer_UseContext;
