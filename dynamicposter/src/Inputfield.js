import React, { Component } from 'react';
import './Inputfield.css';

class Inputfield extends Component {

	constructor(props){
		super(props);
		this.updateText = this.updateText.bind(this);
		this.clearDefault = this.clearDefault.bind(this);

		this.state ={
			value: this.props.default,
			defaulted: true

		};
	};

	clearDefault(){
		if(this.state.defaulted === true){
		this.setState({
			value: "",
			defaulted: false
		});
	}
		
	};


	//updates both the input field and the parent
	updateText(e){
		let updateTo = e.target.value;
		this.setState({
			value: updateTo
		});

		this.props.onChange(this.props.fieldname,updateTo);
	}


	render() {
		const defaulted = this.state.defaulted ? "New" :"";

    	return (
      		<div className="Inputfield" >
      			{this.props.fieldname}
        		<input className = {defaulted} callback = {this.props.callback} default = {this.props.default} onClick = {this.clearDefault} onChange = {this.updateText} value = {this.state.value} type = "text"></input>
      		</div>
   		);
  	}
}

export default Inputfield;
