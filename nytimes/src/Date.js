import React, { Component } from 'react';
import logo from './logo.svg';
import './Date.css';

class Date extends Component {
  render() {
    return (
      <div className="Date">
      	{this.props.mmddyr}
      </div>
    );
  }
}

export default Date;
