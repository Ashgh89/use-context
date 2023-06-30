import { useContext } from "react";
import { UserContext } from "./App";

const ChildComponent = () => {
  // 3. consumer
  const user = useContext(UserContext);
  console.log(user);
  return <div>{user}</div>;
};

export default ChildComponent;
