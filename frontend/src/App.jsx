import "./App.css";

import { Route, Routes} from "react-router-dom";

import Footnote from "./Components/Footnote/Footnote";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Farms from "./Pages/Farms";
import Market from "./Pages/Market";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/market" element={<Market/>} />
      </Routes>
      <Footnote />
    </div>
  );
}

export default App;
