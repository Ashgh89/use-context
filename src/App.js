import { createContext } from "react";
import AnotherGrandChild from "./AnotherGrandChild";
import GrandChild from "./GrandChild";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";
import CounterOne from "./CounterOne";
import CounterProvider from "./CounterProvider";

// 1. create context
export const UserContext = createContext();

function App() {
  return (
    // 2. Provider
    // <UserContext.Provider value={"Second example for useContext"}>
    //   {/* <ParentComponent /> */}
    //   <ChildComponent/>
    // </UserContext.Provider>
    <CounterProvider>
      <p>Helloxcfgbvcvxbfgfb</p>
      <CounterOne />
    </CounterProvider>
  );
}

export default App;

// useContext
