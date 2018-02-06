import React, { Component } from 'react';
import logo from './logo.svg';
import './Listing.css';

class Listing extends Component {
  render() {
    return (
      <div className="Listing">

		<time> {this.props.mmddyr} </time>
		<div id = "textbody">
	       <h2> {this.props.Titletext} </h2>
	       <p>{this.props.Bodytext}</p>
	       <p className = "author">By {this.props.author}</p>
	    </div>
        <figure><img src = {this.props.imgsrc} /></figure>
      </div>
    );
  }
}

export default Listing;
