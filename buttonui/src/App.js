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

  selectButton(label){  
     this.setState({
         currentButton: label
     });
  };

  render() {

    const buttonLabels = ["First Button", "Second Button", "Third Button"];
    const Buttons = buttonLabels.map(Blabel =>{
     return <Button isselected= {this.state.currentButton === Blabel} onClick = {this.selectButton} label = {Blabel}/>
    })

    return (
      <div className="App">
      {Buttons}

      <Selection currentButton = {this.state.currentButton}/>
        
      </div>
    );
  }
}

export default App;
