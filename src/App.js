import React from "react";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>404 Not Found.</p>
        <a className="App-link" href="/">
          Go to Main Page
        </a>
      </header>
    </div>
  );
}

export default App;
