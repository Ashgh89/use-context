// import { useContext } from "react";
import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  // 3. consumer
  // const count = useContext(CounterContext);
  // const setCount=useContext(CounterContextDispatcher);
  const count = useCount();
  const setCount = useCountAction();
  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Click me 2</button>
    </div>
  );
};

export default CounterOne;
