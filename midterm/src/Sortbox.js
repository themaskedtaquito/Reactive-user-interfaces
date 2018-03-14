import React, { Component } from 'react';
import './Sortbox.css';

class Sortbox extends Component {
  constructor(props){
    super(props);
    this.reSort = this.reSort.bind(this);
  }

  reSort(e){
    this.props.onChange(e.target.value);//callback function to change the sort state in the parent
  }
  render() {

    return (
      <div className="Sortbox">
        <select onChange ={this.reSort}>
          <option value = "firstName">Sort by: First Name</option>
          <option value = "lastName">Sort by: Last Name</option>
          <option value = "department">Sort by: Department</option>
          <option value = "address">Sort by: Office Location</option>
        </select>

      </div>
    );
  }
}

export default Sortbox;
