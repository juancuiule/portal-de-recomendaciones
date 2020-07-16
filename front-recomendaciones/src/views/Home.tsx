import React from "react";
import LogoGato from "../components/LogoGato";

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LogoGato />
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1tmhwN3qVSKDxYVluGy3sJnYPY_FAkXk7Wx6eQEFWquM/edit#heading=h.ili72gwy095n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recomendaciones
        </a>
      </header>
    </div>
  );
};

export default Home;
