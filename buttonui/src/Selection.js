import React, { Component } from 'react';
import './Selection.css';

class Selection extends Component {
  render() {
    return (
      	<div className= "Selection">You have selected: {this.props.currentButton}</div>
    );
  }
}

export default Selection;
