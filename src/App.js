import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Test from "./components/dashboard/Test";
import Navbar from "./components/dashboard/navbar/Navbar";
import Dashpanel from "./components/dashboard/Mainpanel/Dashpanel";
import Rightpanel from "./components/dashboard/rightpanel/Rightpanel";
import Users from "./components/Public_profile/Users";
import Tables from "./components/dashboard/Mainpanel/mainbody/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard/*" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Users" element={<Users />} />
        <Route path="*" element={<Test />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
