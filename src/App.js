// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Trade from "./Pages/Trade.js";
import NotFound from "./Pages/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/TransActions' element={<About />} />
      <Route path='/Trade' element={<Trade/>} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
