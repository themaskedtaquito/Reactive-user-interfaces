import React, { Component } from 'react';
import logo from './logo.svg';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
      	{this.props.Bodytext}
      </div>
    );
  }
}

export default Body;
