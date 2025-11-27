import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

function form() {
  const [name, setName] = useState({
    first: "A",
    middle: "Mahesh",
    last: "Babu",
  });

  const handleClicker = () => {
    setName({
      //   ...name,
      first: "Adaka",
      //   middle: "Siva",// hear it showing witout spred operator it will show undefine
      last: "Nagaraju",
    });
  };
  return (
    <div>
      <Typography onClick={handleClicker}>
        {name.first + name.middle + name.last}
      </Typography>
    </div>
  );
}

export default form;
