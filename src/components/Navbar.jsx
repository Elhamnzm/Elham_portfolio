import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Elham</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;