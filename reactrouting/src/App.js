import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AboutPage from './AboutPage';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to ="/">Home</Link>
          <Link to="/about">About</Link> {/*Creates link to a route*/}

          <Route exact path = "/" component = {Home} />       
          <Route exact path = "/about" component = {AboutPage}/> {/*Component to be rendered at this path*/}



        </div>
      </Router>
    );
  }
}

export default App;
