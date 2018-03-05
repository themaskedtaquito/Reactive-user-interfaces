import React, { Component } from 'react';
import './Filterbox.css';

class Filterbox extends Component {
  constructor(props){
    super(props);
    this.reSort = this.reSort.bind(this);
  }

  reSort(e){
    this.props.onChange(e.target.value);
  }
  render() {

    return (
      <div className="Filterbox">
        <select onChange ={this.reSort}>
          <option value = "firstName: Ascending">Sort by: First Name- Ascending</option>
          <option value = "firstName: Descending">Sort by: First Name- Descending</option>
          <option value = "lastName: Ascending">Sort by: Last Name- Ascending</option>
          <option value = "lastName: Descending">Sort by: Last Name- Descending</option>
          <option value = "department">Sort by: Department</option>
        </select>

      </div>
    );
  }
}

export default Filterbox;
