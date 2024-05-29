import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

import Footnote from "./Components/Footnote/Footnote";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Farms from "./Pages/Farms";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/farms" element={<Farms/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footnote />
    </div>
  );
}

export default App;
