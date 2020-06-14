import React from 'react';
import logo from './logo.svg';
import Movies from "./Movies";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Moja apka</h1>
        <Movies></Movies>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacth
        </a>
      </header>
    </div>
  );
}

export default App;
