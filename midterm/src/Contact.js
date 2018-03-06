import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.openMessageBox = this.openMessageBox.bind(this);
  }

  openMessageBox(){
    this.props.onClick(this.props.firstName + " " + this.props.lastName);
  }

  render() {
    return (
      <div className="Contact">
       	<figure><img src = {this.props.imgsrc} width ="73px"></img></figure>
        <div className = "Information">
        	<label>{this.props.firstName} {this.props.lastName}</label>
        	<p>{this.props.department}</p>
        	<p>{this.props.phone} - {this.props.email} - {this.props.address}</p>
        </div>
        <button onClick = {this.openMessageBox}>Message</button>

        
      </div>
    );
  }
}

export default Contact;
