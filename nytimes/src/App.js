import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';
import Divider from './Divider';
class App extends Component {
  render() {
    return (

      <div className="App">

        <Listing mmddyr = "Jan. 30, 2018" Titletext = "Kodak's Dubious Blockchain Gamble" Bodytext = "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck." author = "KEVIN ROOSE" imgsrc = "./coins.jpg" />
        <Divider />
        <Listing mmddyr = "Jan. 30, 2018" Titletext = "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel" Bodytext = "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday." author = "CHRIS HORTON" imgsrc = "./plane.jpg" />
        <Divider />
        <Listing mmddyr = "Jan. 29, 2018" Titletext = "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon" Bodytext = "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy." author = "BRAD PLUMER" imgsrc = "./vote.jpg" />
      </div>
    );
  }
}

export default App;
