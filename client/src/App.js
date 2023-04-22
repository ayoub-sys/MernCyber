
import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Home from "./components/Home";
import LatestNews from "./components/LatestNews";
import Scan from "./components/Scan";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/LatestNews" element={<LatestNews/>} />
      <Route exact path="/Scan" element={<Scan/>} />
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
