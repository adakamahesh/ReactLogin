import React, { useEffect, useState } from "react";

function useeffect() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("amb");
  //   });//Runs after every render (every time state/props change).

  //  useEffect(() => {
  //     console.log("amb");
  //   },[]);//Runs only once, when the component mounts.

  // useEffect(() => {
  //     console.log("amb");
  //   },[count]);//Runs only when specific values change.

  useEffect(() => {
    console.log("mahesh"); //this is for mountain data

    return () => {
      console.log("babu"); //this for unmountain data
    };
  }, []);

  return (
    <div>
      <h4>amb</h4>
      <h3>count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default useeffect;
