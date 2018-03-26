import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

	constructor(props){
		super(props);

		this.submit = this.submit.bind(this);
		this.updateField = this.updateField.bind(this);

		//the names of the fields must match the name of the fields in App's contact json exactly
		this.state = {  
			imgsrc: "chadwick.jpg",
			name: "",
			phone:"",
			email: "",
			department:"",
			office: ""
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
		this.props.onClick(this.state);
		this.setState({
			imgSrc: "chadwick.jpg",
			firstName: "",
			lastName:"",
			phone:"",
			email: "",
			department:"",
			address: ""
		});
	}

	render(){
		return(
			<div className = "Form">
				<input value = {this.state.firstName}type = "text" name = "firstName" onChange = {this.updateField} placeholder = "Contact first name"></input>
				<input value = {this.state.lastName}type = "text" name = "lastName" onChange = {this.updateField} placeholder = "Last name"></input>
				<input value = {this.state.department}type = "text" name = "department" onChange = {this.updateField} placeholder = "Department"></input>
				<input value = {this.state.phone}type = "text" name = "phone" onChange = {this.updateField} placeholder = "Phone number"></input>
				<input value = {this.state.email}type = "text" name = "email" onChange = {this.updateField} placeholder = "Email"></input>
				<input value = {this.state.address}type = "text" name = "address" onChange = {this.updateField} placeholder = "Office location"></input>

				<button onClick = {this.submit}>Add</button>
			</div>
		)
	}
}

export default Form