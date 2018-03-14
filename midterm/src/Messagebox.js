import React, { Component } from 'react';
import './Messagebox.css';

class Messagebox extends Component {
	constructor(props){
		super(props);
		this.updateText = this.updateText.bind(this);
		this.closeMessageBox = this.closeMessageBox.bind(this);
		this.state ={
			subject: "Subject: ",
			body:""
		};
	}

	updateText(e){
		let updateTo = e.target.value;

		if(updateTo.indexOf("Subject")>=0){
			this.setState({
				subject: updateTo
			});
		}

		else{
			this.setState({
				body: updateTo
			});
		}
	}

	closeMessageBox(e){
		this.setState({ //set state to clear whatever was written
			subject: "Subject: ",
			body:""
		});

		this.props.onClick(e.target.innerHTML); //send the button's label to know whether or not to display sent! notification
	}

  render() {

    return (
      <div className={"Messagebox" + " " +this.props.className}> 
        <input value = {"To: "+this.props.recipient}></input>
        <input value = {this.state.subject} onChange = {this.updateText}></input>
        <textarea value = {this.state.body} onChange = {this.updateText}></textarea>
        <button onClick = {this.closeMessageBox}>Cancel</button>
        <button onClick = {this.closeMessageBox}>Send</button>

      </div>
    );
  }
}

export default Messagebox;
