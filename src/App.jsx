import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Header";
import { Footer } from "./component/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import Projet from "./pages/Projet";
import Bio from "./pages/Bio";
import Charte from "./pages/Charte";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/charte" element={<Charte/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
