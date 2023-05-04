import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Signup' element={<Signup/>} />
        <Route path='/' element={<Home />}>
        
      </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
