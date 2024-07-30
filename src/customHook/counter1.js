import React from "react";
import useCounter from "./counter";

export default function Counter1() {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Counter1</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
