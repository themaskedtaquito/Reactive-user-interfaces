import React, { Component } from 'react';
import './Poster.css';

class Poster extends Component {
  render() {
  	
    return (
      <div className="Poster">
	      <h1>{this.props.event}</h1>
	      <div className = "bot">
		      <p>{this.props.location}</p>
		      <p>{this.props.time}</p>
		  </div>
        
      </div>
    );
  }
}

export default Poster;
