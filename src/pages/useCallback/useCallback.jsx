import React, { useCallback, useState } from "react";

const list = [];

function Callback() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
    // setCount(count+1);
  }, [count < 2 ? 0 : count]); //[] in this array we use to write logic for change memory address

  list.push(increment);
  if (list.length === 3) {
    console.log(list);
    console.log(list[0] === list[1]); //it is showing memory address
    console.log(list[0] === list[2]);
  }

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Callback;
