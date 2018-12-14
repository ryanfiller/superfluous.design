import React, { Component } from 'react';
import logo from './dog-weapon.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="the best gif ever" />
          <a
            className="App-link"
            href="www.ryanfiller.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ryanfiller.com
          </a>
        </header>
      </div>
    );
  }
}

export default App;
