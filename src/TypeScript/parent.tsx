import React from "react";
import ChildTSCompt from "./child";
import Child2TSComp from "./child2";

const ParentTSComp = () => {
  const users = [
    {
      fname: "Ismoil",
      lname: "Sharifov",
    },
    {
      fname: "Sorbon",
      lname: "Mirzokhon",
    },
    {
      fname: "Buzurg",
      lname: "Ahrorov",
    },
  ];

  const owner = "Ismoil";

  const handleClick = () => {
    console.log("test");
  };

  return (
    <div>
      <ChildTSCompt users={users} owner={owner} handleClick={handleClick}>
        <Child2TSComp />
      </ChildTSCompt>
    </div>
  );
};

export default ParentTSComp;
