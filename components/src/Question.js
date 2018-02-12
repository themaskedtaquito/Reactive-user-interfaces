import React, { Component } from 'react';
import logo from './logo.svg';
import './Question.css';

class Question extends Component {
  render() {
    return (
      <div className="Question">

      	{this.props.questionText}
        
      </div>
    );
  }
}

export default Question;