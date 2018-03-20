import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);

    this.state = {
      contacts: [
      {name: "Person 1",email: "one@email.com"},
      {name: "Person 2",email: "two@email.com"},
      {name: "Person 3",email: "three@email.com"}
      ]
    }
  }

  addContact(name,email){
      let copy = this.state.contacts.slice();
      copy.push({name:name,email:email});
      console.log(copy);
      this.setState({
        contacts: copy
      });
    }

  render() {
    const list = this.state.contacts.map(contact =>{
      return<p> {contact.name} - {contact.email}</p>
    });

    return (
      <div className="App">
        {list}
        <Form onClick = {this.addContact}/>
        
      </div>
    );
  }
}

export default App;
