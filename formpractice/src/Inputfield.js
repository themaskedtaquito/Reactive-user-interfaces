import React, { Component } from 'react';
import './Inputfield.css';

class Inputfield extends Component {

	constructor(props){
		super(props);
		this.updateText = this.updateText.bind(this);
		this.clearDefault = this.clearDefault.bind(this);

		this.state ={
			value: "Type your text here"
		};
	};

	clearDefault(){
		this.setState({
			value: ""
		});
	};

	updateText(e){
		let updateTo = e.target.value;
		updateTo = updateTo.replace("fuck","duck");
		this.setState({
			value: updateTo
		});

	}

	render() {

    	return (
      		<div className="Inputfield">
        		<input onClick = {this.clearDefault} onChange = {this.updateText} value = {this.state.value} type = "text"></input>
      		</div>
   		);
  	}
}

export default Inputfield;
