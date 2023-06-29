import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="gallery" element={<Gallery></Gallery>}></Route>
      </Routes>
    </div>
  );
}

export default App;
