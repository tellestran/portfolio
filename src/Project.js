import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/db.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setProjects(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div>
      <Navbar />
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {loading ? (
            // Render loading state
            <p>Loading...</p>
          ) : error ? (
            // Render error state
            <p>Error: {error}</p>
          ) : (
            // Render ProjectCards with fetched data
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
