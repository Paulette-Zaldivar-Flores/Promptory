import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="footer">
        Open-source code
        <a
          href="https://github.com/Void321/React-Dictionary"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
        </a>{" "}
        |by: Me{" "}
        <a
          href="https://www.linkedin.com/in/paulettezaldivarflores3"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>{" "}
        | Hosted on{" "}
        <a
          href="https://incandescent-froyo-b0949f.netlify.app/"
          target="blank"
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
}
