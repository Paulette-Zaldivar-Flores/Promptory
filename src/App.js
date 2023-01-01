import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import bgImage from "./video/background-image.mp4";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Promptory</header>
        <video playsinline autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <main>
          <Dictionary defaultKeyword="Compass" />
        </main>
        <div>
          <p id="rights">
            @ 2022 Paulette Zaldivar Flores. All Rights Reserved.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
