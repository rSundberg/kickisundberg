import React, { Component } from 'react';
import burger from './burger.svg';
import Menu from './Menu';
import './scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="buger-icon" className="App-header__burger" src={burger}/>
          <h1 className="App-header__title">Kicki Sundberg</h1>
          <Menu items={['A', 'B', 'C', 'D']} /> 
        </div>
      </div>
    );
  }
}

export default App;
