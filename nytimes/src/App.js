import React, { Component } from 'react';
import './App.css';
import Listing from './Listing';
class App extends Component {
  render() {
  	const ListingObjects =[
  	{mmddyr: "Jan. 30, 2018", Titletext: "Kodak's Dubious Blockchain Gamble", Bodytext: "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.", author: "KEVIN ROOSE", imgsrc: "./coins.jpg"},
  	{mmddyr: "Jan. 30, 2018", Titletext: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel", Bodytext: "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.", author: "CHRIS HORTON", imgsrc: "./plane.jpg"},
  	{mmddyr: "Jan. 29, 2018", Titletext: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon", Bodytext: "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.", author: "BRAD PLUMER", imgsrc: "./vote.jpg"}
  	];
  	
  	const ListComponents = ListingObjects.map(item =>{

  		return <Listing mmddyr = {item.mmdyr} Titletext = {item.Titletext} Bodytext = {item.Bodytext} author = {item.author} imgsrc = {item.imgsrc} />
  	});

    return (

      <div className="App">
       {ListComponents}
      </div>
    );
  }
}

export default App;
