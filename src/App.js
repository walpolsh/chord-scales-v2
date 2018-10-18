import React, { Component } from 'react';
import './App.css';
import Scales from './components/Scales';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Scales />
        </header>
      </div>
    );
  }
}

export default App;
