import React, { Component } from 'react';
import './App.css';
import InputWord from "./hangman/inputWord";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><strong>Добро пожаловать в игру Висельник!</strong></p>
          <InputWord/>
      </div>
    );
  }
}

export default App;
