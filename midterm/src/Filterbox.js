import React, { Component } from 'react';
import './Filterbox.css';

class Filterbox extends Component {
  constructor(props){
    super(props);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(e){
    this.props.onChange(e.target.value); //callback function to change the filter state in the parent 
  }
  render() {

    return (
      <div className="Filterbox">
        <select onChange ={this.setFilter}>
          {this.props.filters}
        </select>

      </div>
    );
  }
}

export default Filterbox;
