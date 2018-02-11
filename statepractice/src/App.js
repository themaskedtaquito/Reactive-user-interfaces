import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
     count: 0
     };
    this.singleClick = this.singleClick.bind(this);
    this.doubleClick = this.doubleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

 singleClick(){

    this.setState({
      count: this.state.count += 1
    });
  }

 doubleClick(){

    this.setState({
      count: this.state.count += 2
    });
  }

  reset(){
    this.setState({
      count: 0
    })
  }  

  render() {
    return (
      <div className="App">
        <Button onClick = {this.singleClick} label = "Click this" />
        <Button onClick = {this.doubleClick} label = "Value click" />
        <Button onClick = {this.reset} label = "Reset score" />
        <p>score: {this.state.count}</p>
      </div>
    );
  }
}

export default App;
