import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  constructor(props){
    super(props);
    this.openMessageBox = this.openMessageBox.bind(this);
    this.isolateContact = this.isolateContact.bind(this);
    this.members = this.props.members;
  }

  openMessageBox(){
    let recipients = []
    for(var i=0;i<this.members.length;i++){
      recipients.push(this.members[i][0]); //separate list otherwise Messagebox "To" also includes their position
    }
    this.props.onClick(recipients); //same callback function used by Contact component
  }

  isolateContact(e){ //sets the search to be the exact name of the clicked contact, isolating it as a selection
    this.props.search(e.target.innerHTML)
  }

  render() {

  	const teamMembers = this.members.map(member => {
  		return <span><div className = "clickable" onClick = {this.isolateContact} href ="">{member[0]+"- "}{member[1]}</div>{" "}</span>
  	});

    return (
      <div className="Team">
        <div className = "Information">
        	<h2>{this.props.teamName}</h2>
        	{teamMembers}
        </div>
        <button onClick = {this.openMessageBox}>Message</button>   
      </div>
    );
  }
}

export default Team;
