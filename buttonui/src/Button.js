import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	constructor(props){
		super(props)
		this.clicked = this.clicked.bind(this);
	}

	clicked(){
		this.props.onClick(this.props.label);
	}

  render() {

  	const isselected= this.props.isselected ? " Selected" : "";
    return (
      	<button onClick = {this.clicked} className= {"Button" + isselected}>{this.props.label}</button>
    );
  }
}

export default Button;
