import React from "react";

type ThisCompProps = {
  users: {
    fname: string;
    lname: string;
  }[];
  children: React.ReactNode;
  owner?: string;
  onButtonClick: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
  val: string;
  onChangeEvenet: React.ChangeEventHandler<HTMLInputElement>;
  styles: React.CSSProperties;
};

type Node = React.ReactNode;

const ChildTSCompt = (props: ThisCompProps) => {
  return (
    <>
      <div style={props.styles} onClick={(e) => props.onButtonClick(e, 1)}>
        {props.children}
        <input type="text" value={props.val} onChange={props.onChangeEvenet} />
      </div>
    </>
  );
};

export default ChildTSCompt;
