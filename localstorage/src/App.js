import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.addElephants = this.addElephants.bind(this);
    this.goodbyeElephants = this.goodbyeElephants.bind(this);

    const stringState = localStorage.getItem('elephantData');
    if(stringState){
      this.state = JSON.parse(stringState);

    }

    else {
      this.state ={
      elephants: []
      }
    }
  }

  addElephants(){
    let newState = this.state.elephants.slice();
    newState.push("elephant.jpg");
    this.setState({
      elephants: newState
    });
  }

  goodbyeElephants(){
    this.setState({
      elephants: []
    });
  }

  render() {
    let elephantCopy = this.state.elephants.slice();

    const elephantImg = elephantCopy.map(e =>{
      return <img src = {e} width = "200px" />
    });

    return (
      <div className="App">
        <button onClick = {this.addElephants}> Add elephants </button>
        <button onClick = {this.goodbyeElephants}> Goodbye, elephants</button>
        {elephantImg}
      </div>
    );
  }

  componentDidUpdate(){
    const stringState = JSON.stringify(this.state);
    localStorage.setItem('elephantData',stringState);
  }
}

export default App;
