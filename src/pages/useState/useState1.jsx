import { Button } from "@mui/material";
import React, { useState } from "react";

function form() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState(true);
  const [middle, setMiddle] = useState("mahesh");
  const [first, setFirst] = useState("adaka");
  // const first = "Adaka";
  // const last='babu';
  const nameHandler = () => {
    setOpen(!open);
    setLast("babu");
    setMiddle("mm");
    setFirst(false);
  };
  return (
    <div>
      {/* <Button onClick={nameHandler}>{open ? last : first}</Button> */}
      <Button onClick={nameHandler}>
        {open ? last : middle ? first : "amb"}
      </Button>
    </div>
  );
}

export default form;
