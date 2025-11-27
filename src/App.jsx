import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signin from "./pages/Signin";
import UseState from "./pages/useState/useState3";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/" element={<Home/>} />
      <Route path='/usestate' element={<UseState/>} />
    </Routes>
  );
}

export default App;
