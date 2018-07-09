import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myArr = [1,2,3,4,5,6,7,8,9];

const result1 = myArr.map(v => `${v * 2}, `);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">KeepCoding</h1>
        </header>
        <div className="App-intro">
          <p><b>myArr:</b> {myArr}</p>
          <p><b>Result1:</b> {result1}</p>
        </div>
      </div>
    );
  }
}

export default App;
