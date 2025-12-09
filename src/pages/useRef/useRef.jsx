import React, { useState, useRef } from "react";

const list = [];
function name() {
  const [count, setCount] = useState(0);
  const reference = useRef({
    name: "mahesh",
    age: "20",
  });
  // console.log(reference);

  list.push(reference);
  if (list.length === 2) {
    console.log(list);
    console.log(list[0] === list[1]);
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (reference.current.age = "25")}>updateAge</button>
    </div>
  );
}

export default name;
