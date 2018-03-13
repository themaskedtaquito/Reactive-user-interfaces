import React, { Component } from 'react';
import './Filterbox.css';

class Filterbox extends Component {
  constructor(props){
    super(props);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(e){
    this.props.onChange(e.target.value);
  }
  render() {

    return (
      <div className="Filterbox">
        <select onChange ={this.setFilter}>
          <option value = "none">Filter Departments: None </option>
          <option value = "Engineering">Engineering</option>
          <option value = "Graphic Design">Graphic Design</option>
          <option value = "Product Design">Product Design</option>
          <option value = "QA Department">QA Department</option>
        </select>

      </div>
    );
  }
}

export default Filterbox;
