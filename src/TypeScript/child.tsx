import React from "react";

// generating more literals by the below trick:
type Horizontal = "left" | "center" | "right";

type Vertical = "top" | "center" | "bottom";

type Toast = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};
// generating more literals by the below trick:

// when one key is passed then the other one is not needed:
type isPositive = {
  isPositive: boolean;
  isNegative?: never;
};

type isNegative = {
  isNegative: boolean;
  isPositive?: never;
};

type State = isPositive | isNegative;
// when one key is passed then the other one is not needed:

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
  mood: State;
  position: Toast;
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
