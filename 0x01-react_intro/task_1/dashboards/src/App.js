import React from 'react';
import './App.css'; // Ensure you have the necessary CSS file for styling
import Logo from './logo.jpg'; // Adjust the path as necessary
import { getFullYear, getFooterCopy } from './utils'; // Import the utility functions

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>© {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
