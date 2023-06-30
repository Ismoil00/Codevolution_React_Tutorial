import React from "react";
import Button from "./button";

const html_main = () => {
  return (
    <Button
      as="button"
      variant="primary"
      onClick={() => console.log("HTML Button Element")}
    >
      {/* <p> this is HTML Button Element</p> */}
      this is HTML Button Element
    </Button>
  );
};

export default html_main;
