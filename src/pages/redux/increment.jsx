import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./incrementSlice";

function counter() {
  const count = useSelector((state) => state.count.value);//createSlice creates actions + reducer together automatically.
  const dispatch = useDispatch();//useDispatch sends actions to Redux store.
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment: {count}</button>
      {/* <button onClick={() => dispatch(decrement())}> decrement :{count}</button> */}
    </div>
  );
}

export default counter;
