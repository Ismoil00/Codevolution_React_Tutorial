import React from "react";
import all from "../../cssModules/button.module.css";
import useDocumentTitle from "./useDocumentTitle";
import useInput from "./useInput";

const CustomHook = () => {
  const [count, increase, decrease, reset] = useDocumentTitle(10, 5);
  const [firstName, bindFirstName, resetFirstName] = useInput("Ismoil");
  const [secondName, bindLastName, resetLastName] = useInput("Sharifov");

  const onFinish = (e) => {
    e.preventDefault();
    alert(`This is ${firstName} ${secondName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button className={all.primary} onClick={increase}>
          Increase
        </button>
        <button className={all.primary} onClick={decrease}>
          Decrease
        </button>
        <button className={all.primary} onClick={reset}>
          Reset
        </button>
      </div>
      <form
        onSubmit={onFinish}
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="first_name">First Name: </label>
        <input {...bindFirstName} type="text" name="first_name" />
        <br />
        <label htmlFor="last_name">Last Name: </label>
        <input {...bindLastName} type="text" name="last_name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomHook;
