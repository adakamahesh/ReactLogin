import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addusers } from "./userSlice";

function user() {
  const [name, setName] = useState("");
  const dishpatch = useDispatch();
  const user = useSelector((state) => state.username.users);

  const handleClicker = (e) => {
    e.preventDefault();
    dishpatch(addusers(name));
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleClicker}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        users:
        {user.map((item,index) => (
            <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default user;
