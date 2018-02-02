import React, { Component } from 'react';
import logo from './logo.svg';
import './Author.css';

class Author extends Component {
  render() {
    return (
      <div className="Author">
      	By {this.props.author}
      </div>
    );
  }
}

export default Author;
