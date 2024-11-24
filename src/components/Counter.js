import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file for styling

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter-value">{count}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
