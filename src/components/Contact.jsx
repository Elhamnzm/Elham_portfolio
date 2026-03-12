import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        Interested in working together or have any questions? Feel free to
        reach out.
      </p>
      <div className="contact-details">
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com">elham.nourizadeh@gmil.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/elham-nourizadeh
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            your-username
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;