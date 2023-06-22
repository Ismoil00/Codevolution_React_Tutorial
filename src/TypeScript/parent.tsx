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

  // on button click:
  const onButtonClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    console.log("handle click event: ", e);
    console.log("handle click id: ", id);
  };

  return (
    <div>
      <ChildTSCompt
        users={users}
        owner={owner}
        onButtonClick={onButtonClick}
        val={"ismoil"}
        onChangeEvenet={(e) => console.log(e)}
        styles={{border: "1px solid black", color: "lightblue"}}
      >
        <Child2TSComp />
      </ChildTSCompt>
    </div>
  );
};

export default ParentTSComp;
