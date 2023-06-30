import { createContext, useState } from "react";
import { useContext } from "react";

// 1. create context
/*export*/ const CounterContext = createContext(); // count
/*export*/ const CounterContextDispatcher = createContext(); // setCount

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  // 2. Provider
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};
// useMemo - useCallback
export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);
