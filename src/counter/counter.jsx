import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if(count > 0 ){
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>counter component</h1>
      <p data-testid="counter">{count}</p>
      <button onClick={increment} data-testid="increment-btn">increment</button>
      <button onClick={decrement} data-testid="decrement-btn">decrement</button>
    </div>
  );
}

export default Counter;
