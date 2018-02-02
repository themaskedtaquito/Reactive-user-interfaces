import React, { Component } from 'react';
import logo from './logo.svg';
import './Title.css';

class Title extends Component {  render() {
    return (
      <div className="Title">
      	{this.props.Titletext}
      </div>
    );
  }
}

export default Title;
