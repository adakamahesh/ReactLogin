import { Typography } from "@mui/material";
import React, { useState } from "react";

function form() {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6]);
  const [names, setNames] = useState([
    { first: "mahesh", last: "babu" },
    { first: "sri", last: "adaka" },
  ]);

  const handleClicker = () => {
    // setItem([...item, item.length + 1]);
    // setItem(item.filter((item) => item % 2 == 0));//it will writen even number array
    // setItem(item.filter((item) => item % 2 !== 0));//it will writen odd number array
    // setItem(item.map((item) => item * 2));// it will multiply by 2 each and every array value
    // setItem(item.find((item) => item % 2 == 0)); // it Find the first even number in the array
    // setItem(item.indexOf(3));//it will show 3 index value
    setNames([...names, { first: "mb", last: "a" }]); //it will add one more object
    // setNames([{first:"mb",last:'a'}])//it will update entary names
    // setNames(
    //   names.map((item) =>
    //     item.first === "mahesh" ? { ...item, first: "jay" } : item
    //   )
    // );
  };
  return (
    <div onClick={handleClicker}>
      {/* <Typography onClick={handleClicker}>arr:{item}</Typography> */}
      {names.map((item, index) => (
        <p key={index}>
          {item.first} {item.last}
        </p>
      ))}
    </div>
  );
}

export default form;
