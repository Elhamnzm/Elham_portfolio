import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I&apos;m a data enthusiast with a strong interest in analytics,
        dashboards, and business insights. I enjoy working with real-world
        datasets and telling stories with data.
      </p>

      <div className="skills-grid">
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>Java</li>
            <li>Object-Oriented Programming</li>
            <li>Data Analysis</li>
            <li>Data Visualisation</li>
            <li>Statistical Analysis</li>
            <li>Database Management</li>
          </ul>
        </div>
        <div>
          <h3>Digital Tools</h3>
          <ul>
            <li>Excel</li>
            <li>PowerPoint</li>
            <li>Git</li>
            <li>Jupyter Notebook</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Clear Communication</li>
            <li>Collaborative Working</li>
            <li>Stakeholder Engagement</li>
            <li>Cross-Cultural Communication</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;