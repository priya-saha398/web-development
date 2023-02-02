import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={incrementHandler}>increment</button>
    </div>
  );
}
