import { createContext } from "react";
import ChildContext from "./ContextChild";

export const User = createContext();
export const Admin = createContext();

const ParentContext = () => {
  return (
    <User.Provider value={"Ahrorov Buzurgmehr"}>
      <Admin.Provider value={"Sharifov Ismoil"}>
        <ChildContext />
      </Admin.Provider>
    </User.Provider>
  );
};

export default ParentContext;
