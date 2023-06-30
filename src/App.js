import { createContext } from "react";
import AnotherGrandChild from "./AnotherGrandChild";
import GrandChild from "./GrandChild";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

// 1. create context
export const UserContext = createContext();

function App() {
  return (
    // 2. Provider
    <UserContext.Provider value={"Second example for useContext"}>
      {/* <ParentComponent /> */}
      <ChildComponent/>
    </UserContext.Provider>
  );
}

export default App;

// useContext
