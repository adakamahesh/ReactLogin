import React, { useState } from "react";

function form() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleClicker = (e) => {
    e.preventDefault()
    if (first !== "mahesh" && last === "babu") {
      console.log("This is admin page");
    } else if(first === 'sri'|| last==='adaka') {
      console.log("This is super admin page");
    } else {
        console.log("This is user page");
    }
  };
  return (
    <div>
      <form onSubmit={handleClicker}>
        <input
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Enter first name"
        />

        <input
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder="Enter last name"
        />

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default form;
