import React from "react";

type ThisCompProps = {
  users: {
    fname: string;
    lname: string;
  }[];
  children: React.ReactNode;
  owner?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type Node = React.ReactNode;

const ChildTSCompt = (props: ThisCompProps) => {
  return (
    <>
      <div onClick={props.handleClick}>{props.children}</div>
    </>
  );
};

export default ChildTSCompt;
