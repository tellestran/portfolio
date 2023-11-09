import React from "react";

const ProjectCard = ({ projectName, description }) => (
  <div className="card overflow-hidden shadow rounded-4 border-0">
    <div className="card-body p-0">
      <div className="d-flex align-items-center">
        <div className="p-5">
          <h2 className="fw-bolder">{projectName}</h2>
          <p>{description}</p>
        </div>
        <img
          className="img-fluid"
          src="https://dummyimage.com/300x400/343a40/6c757d"
          alt="..."
        />
      </div>
    </div>
  </div>
);

export default ProjectCard;
