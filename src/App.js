import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import bgImage from "./video/background-image.mp4";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Dictionary App</header>
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>

        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="footer">
        <a
          href="https://github.com/Void321/React-Dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        |by:Paulette Zaldivar Flores | Hosted on{" "}
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
