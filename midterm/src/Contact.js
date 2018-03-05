import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
       	<figure><img src = {this.props.imgsrc} width ="73px"></img></figure>
        <div className = "Information">
        	<label>{this.props.firstName} {this.props.lastName}</label>
        	<p>{this.props.department}</p>
        	<p>{this.props.phone} - {this.props.email} - {this.props.address}</p>
        </div>
        <button>Message</button>

        
      </div>
    );
  }
}

export default Contact;
