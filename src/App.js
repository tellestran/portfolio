import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./Project";
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
