import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Projectspage from "./Pages/Projectspage/Projectspage";

import { AnimatePresence } from "framer-motion";
import Careerpage from "./Pages/Careerpage/Careerpage";
import Contactpage from "./Pages/Contactpage/Contactpage";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/EGportfolio" element={<Homepage />} />
          <Route path="/EGportfolio/projects" element={<Projectspage />} />
          <Route path="/EGportfolio/career" element={<Careerpage />} />
          <Route path="/EGportfolio/contact" element={<Contactpage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
