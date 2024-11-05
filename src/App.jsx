import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectspage from "./Pages/Projectspage/Projectspage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
