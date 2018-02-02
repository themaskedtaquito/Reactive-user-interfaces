import React, { Component } from 'react';
import logo from './logo.svg';
import './Textbody.css';
import Title from './Title'
import Body from './Body'
import Author from './Author'

class Textbody extends Component { //Container component to allow Title, Body, and Author components to display in a column when styling
  render() {
    return (
      <div className="Textbody">
        <Title Titletext = {this.props.Titletext} />
        <Body Bodytext = {this.props.Bodytext} />
        <Author author = {this.props.author} />
      </div>
    );
  }
}

export default Textbody;
