import React, { Component } from 'react';

class Form extends Component{

	constructor(props){
		super(props);

		this.submit = this.submit.bind(this);
		this.updateField = this.updateField.bind(this);

		this.state = {
			name: "",
			email: ""
		}
	}

	updateField(e){
		
		this.setState({
			[e.target.name]: e.target.value
		});

		console.log(e.target.name);
		console.log(e.target.value);
	}
	submit(){
		this.props.onClick(this.state.name,this.state.email);
		this.setState({
			name: "",
			email:""
		});
	}

	render(){
		return(
			<div>
				<input value = {this.state.name}type = "text" name = "name" onChange = {this.updateField} placeholder = "Enter Name"></input>
				<input value = {this.state.email}type = "text" name = "email" onChange = {this.updateField} placeholder = "Enter Email"></input>
				<button onClick = {this.submit}> Add Contact</button>
			</div>
		)
	}
}

export default Form