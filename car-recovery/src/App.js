import React from 'react';
import logo from './logo.svg';
import Navbar from './components/header/navigation/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;