import React, { Component } from 'react';
import Inputfield from './Inputfield';
import Poster from './Poster';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.updatePoster = this.updatePoster.bind(this);

    this.state ={
      event: "IMA SPRING SHOW 2018",
      location: "NYU Shanghai, 9th floor",
      time: "May 11th, 5pm - 7pm"
    };

  };


  //callback function for the input component
  updatePoster(field,text){

    if(field === "Location"){
      this.setState({
        location: text
      });
    }

    else if(field === "Time"){
      this.setState({
        time: text
      });
    }

    else{
      this.setState({
        event: text
      });
    }
  }

  render() {
    return (
      <div className="App">
      <Inputfield onChange ={this.updatePoster} default = "IMA SPRING SHOW 2018" fieldname = "Event name"/>
      <Inputfield onChange ={this.updatePoster} default = "NYU Shanghai, 9th floor" fieldname = "Location" />
      <Inputfield onChange ={this.updatePoster} default ="May 11th, 5pm - 7pm" fieldname = "Time"/>

      <Poster event ={this.state.event} location ={this.state.location} time ={this.state.time}/>
        
      </div>
    );
  }
}

export default App;
