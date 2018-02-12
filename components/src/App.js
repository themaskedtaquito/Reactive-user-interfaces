import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Answerfield from './answerField'
import Question from './Question'
class App extends Component {
  render() {
    const nextQ = false;
    return (
      <div className="App">
        <Question questionText = {nextQ==false &&"Which animal has the biggest ears?"} />
        <Question questionText = {nextQ && "Which animal lives in the South Pole?"}/>
        <Answerfield choicenumber="A" choice ="Penguin"/>
        <Answerfield choicenumber="B" choice ="Elephant"/>
        <Answerfield choicenumber="C" choice ="Tiger"/>

      </div>
    );
  }
}

export default App;
