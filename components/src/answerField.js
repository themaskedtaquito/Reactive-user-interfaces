import React, { Component } from 'react';
import logo from './logo.svg';
import './answerField.css';

class Answerfield extends Component {
  render() {
    return (
      <div className="Answerfield">

      	{this.props.choicenumber}. {this.props.choice}
        
      </div>
    );
  }
}

export default Answerfield;