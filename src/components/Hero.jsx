import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-tagline">Aspiring Data Analyst</p>
        <h1>Hi, I&apos;m Elham.</h1>
        <p>
          I turn raw data into clear, actionable insights using tools like SQL,
          Excel, and Python. I&apos;m currently looking for a data analysis, predictive modelling, and data engineering internship.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;