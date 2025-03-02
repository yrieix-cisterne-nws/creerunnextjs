import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Header";
import { Footer } from "./component/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import Projet from "./pages/Projet";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-[#d3d3d3]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/projet" element={<Projet />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
