import { useContext } from "react";
import { MyContext } from "./ParentComponent";

const GrandChild = () => {
    // 3. consumer
  const x = useContext(MyContext);
  return <div>hello {x}</div>;
};

export default GrandChild;
