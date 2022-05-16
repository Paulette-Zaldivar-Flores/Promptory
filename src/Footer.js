import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="footer">
        <a
          href="https://github.com/Void321/React-Dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        |by: Paulette Zaldivar Flores | Hosted on{" "}
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
