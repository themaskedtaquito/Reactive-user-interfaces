import React, { Component } from 'react';
import './Tweet.css'

class Tweet extends Component{
	render(){
		return(
			<div>
				@{this.props.username}: {this.props.body} 
			</div>
		)
	}
}

export default Tweet