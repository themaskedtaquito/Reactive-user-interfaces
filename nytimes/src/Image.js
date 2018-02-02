import React, { Component } from 'react';
import logo from './logo.svg';
import './Image.css';

class Image extends Component {
  render() {
    return (
      <div className="Image">
      	<img width = "175px" height = "125px" src={this.props.imgsrc} />
      </div>
    );
  }
}

export default Image;
