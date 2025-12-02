import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signin from "./pages/Signin";
import UseState from "./pages/useState/useState4";
import Home from "./pages/home";
import Logical from "./pages/LogicalOperators/logical";
import Increment from "./pages/redux/increment";
import User from "./pages/redux/user";
import Name from "./pages/redux/name";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/logical" element={<Logical />} />
      <Route path="/increment" element={<Increment />} />
      <Route path="/users" element={<User />} />
      <Route path="/names" element={<Name />} />
    </Routes>
  );
}

export default App;
