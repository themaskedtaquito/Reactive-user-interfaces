import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Selection from './Selection';

class App extends Component {
  constructor(props){
    super(props);

    this.selectButton = this.selectButton.bind(this);
    this.state ={
      currentButton: ""
    }
  };

  selectButton(e){

    var buttons = document.getElementsByClassName("Button")
    for(var i = 0; i<buttons.length;i++){
      buttons[i].classList.remove("Selected");
    }
    
    e.target.classList.add("Selected");

    this.setState({
        currentButton: e.target.innerHTML
    });

  };

  render() {

    return (
      <div className="App">
      <Button onClick = {this.selectButton} label = "First Button"/>
      <Button onClick = {this.selectButton} label = "Second Button"/>
      <Button onClick = {this.selectButton} label = "Third Button"/>
      <Selection currentButton = {this.state.currentButton}/>
        
      </div>
    );
  }
}

export default App;
