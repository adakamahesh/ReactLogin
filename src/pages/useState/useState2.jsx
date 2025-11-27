import { Button } from "@mui/material";
import React, { useState } from "react";

function form() {
    let [count, setCount] = useState(8);
  //   let [count, setCount] = useState(false);
  //   let [count, setCount] = useState('mahesh');// hear it defalt shows after setcount it will show NAN
  const handleClicker = () => {
    // setCount(count + 1);
    // setCount(count - 1);
    // setCount(count * 2);
    // setCount(count / 2);
    // setCount(count % 2);
    // setCount(count ++);//hear we can upade valu must be count on let and we can click double of using this
    setCount(++count);
    // setCount(count --);
    // setCount(--count);
  };
  return (
    <div>
      <Button onClick={handleClicker}>Count:{count}</Button>
    </div>
  );
}

export default form;
