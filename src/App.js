import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeightConverter from './components/WeightConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeightConverter />
      </div>
    );
  }
}

export default App;
