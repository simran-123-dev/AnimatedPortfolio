import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>

      <div className="projects-container">
        
        <div className="card">
          <h2>MERN Blog App</h2>
          <p>Full stack blog with JWT auth & CRUD operations.</p>
          <button>View Project</button>
        </div>

        <div className="card">
          <h2>E-Commerce Backend</h2>
          <p>Node + Express + MongoDB API with payments.</p>
          <button>View Project</button>
        </div>

        <div className="card">
          <h2>Portfolio Website</h2>
          <p>Animated personal portfolio using React.</p>
          <button>View Project</button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
