import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./Project";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
