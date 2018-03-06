import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	constructor(props){
		super(props);
		this.updateText = this.updateText.bind(this);
		this.clearDefault = this.clearDefault.bind(this);

		this.state ={
			value: "Search"
		};
	};

	clearDefault(){
		this.setState({
			value: ""
		});
	};

	updateText(e){
		let updateTo = e.target.value;
		this.setState({
			value: updateTo
		});
		this.props.onChange(updateTo);

	}

	render() {

    	return (
      		<div className="Inputfield">
        		<input onClick = {this.clearDefault} onChange = {this.updateText} value = {this.state.value} type = "search"></input>
      		</div>
   		);
  	}
}

export default Search;
