import { useContext } from "react";
import { User, Admin } from "./ContextParent";

const ChildContext = () => {
  const user = useContext(User);
  const admin = useContext(Admin);

  return (
    <>
      <p>Admin: {admin}</p>
      <p>User: {user}</p>
      {/* <User.Consumer>
      {(user) => (
        <Admin.Consumer>
          {(admin) => (
            <>
              <p>Admin: {admin}</p>
              <p>User: {user}</p>
            </>
          )}
        </Admin.Consumer>
      )}
    </User.Consumer> */}
    </>
  );
};

export default ChildContext;
