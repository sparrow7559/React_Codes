import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const reset = () => {
    // setCount(0);
    setCount((c) => (c = 0)); //not neccesary
  };
  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default MyComponent;
