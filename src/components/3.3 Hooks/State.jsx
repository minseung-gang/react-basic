import React from "react";
import { useState } from "react";

export default function State() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(intialCount)}>reset</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}
