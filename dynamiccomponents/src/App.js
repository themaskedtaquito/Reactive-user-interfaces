import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const novel = ["The Beginning", "The Middle", "The Ending"];
    const paragraphs = novel.map(function(label){
      return<p key ={label}> {label} </p>
    });

    return (
      <div className="App">
          {paragraphs}
      </div>
    );
  }
}

export default App;
