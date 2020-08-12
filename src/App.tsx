import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Environment: {process.env.NODE_ENV}</p>
        <p>The example env variable: {process.env.REACT_APP_TEST_VAR}</p>
        <p>All variables:</p>
        <pre>{JSON.stringify(process.env)}</pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
