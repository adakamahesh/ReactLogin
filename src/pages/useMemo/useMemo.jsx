import React, { useState, useMemo } from "react";

function Usememo() {
  const [count, setCount] = useState(0);

  const doubleValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Double: {doubleValue}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Usememo;
