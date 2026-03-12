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
          <a href="mailto:730861@studet.inholland.nl">730861@studet.inholland.nl</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/elhamnourizadeh"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/elhamnourizadeh
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Elhamnzm"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Elhamnzm
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;