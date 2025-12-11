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
import UseEffect from "./pages/useEffect/useeffect";
import Users from "./pages/RTK/names";
import UseRef from "./pages/useRef/useRef";
import UseCallback from "./pages/useCallback/useCallback";
import Usememo from "./pages/useMemo/useMemo";
import Debounce from "./pages/debounce/debounce";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/logical" element={<Logical />} />
      <Route path="/increment" element={<Increment />} />
      <Route path="/user" element={<User />} />
      <Route path="/names" element={<Name />} />
      <Route path="/users" element={<Users />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/useref" element={<UseRef />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/usememo" element={<Usememo />} />
      <Route path="/debounce" element={<Debounce />} />
    </Routes>
  );
}

export default App;
