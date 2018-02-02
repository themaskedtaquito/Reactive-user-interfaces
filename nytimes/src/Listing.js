import React, { Component } from 'react';
import logo from './logo.svg';
import './Listing.css';
import Date from './Date';
import Textbody from './Textbody';
import Image from './Image';

class Listing extends Component {
  render() {
    return (
      <div className="Listing">
		<Date mmddyr = {this.props.mmddyr} />
        <Textbody Titletext = {this.props.Titletext} Bodytext = {this.props.Bodytext} author = {this.props.author}/>
        <Image imgsrc = {this.props.imgsrc} />
      </div>
    );
  }
}

export default Listing;
