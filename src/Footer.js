import React from "react";
import github from "./assets/github-logo.png";
import mail from "./assets/mail-logo.png";
import linkedin from "./assets/linkedin-logo.png";

function Footer() {
  return (
    <footer>
      <h3 id="contact">Contact Me:</h3>
      <section className="contact">
        <a
          className="logo"
          href="https://github.com/malekadair"
          target="_blank"
        >
          <img
            className="github-logo"
            src={github}
            alt="GitHub's Octo-Cat Logo."
            width="100"
            height="75"
          />
          <p>@malekadair</p>
        </a>
        <a className="logo" href="mailto:malekadair@gmail.com">
          <img
            className="mail-logo"
            src={mail}
            alt="Envelope/mail Logo."
            width="100"
            height="75"
          />
          <p>malekadair@gmail.com</p>
        </a>
        <a
          className="logo"
          href="https://www.linkedin.com/in/malekadair/"
          target="_blank"
        >
          <img
            className="linkedin-logo"
            src={linkedin}
            alt="LinkedIn's Logo."
            width="75"
            height="75"
          />
          <p>@malekadair</p>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
