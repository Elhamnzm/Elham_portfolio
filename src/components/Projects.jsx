import React from "react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="section-subtitle">
        A selection of projects that showcase my skills in modelling, analysis,
        visualisation, and software development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;