import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  constructor(props){
    super(props);
    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.setSort = this.setSort.bind(this);

    this.state = {
      sort: "ascending",
      searchFilter: "",
      tweets: [
        {username: 'mari', body: 'This is the first tweet'},
        {username: 'rune', body: 'This is the second tweet'},
        {username: 'mari', body: 'This is the third tweet'},
        {username: 'rune', body: 'This is the fourth tweet'}
      ]
    }
  }

  sortAscending(){
    this.setState({
      sort: "ascending"
    });
  }

  sortDescending(){
    this.setState({
      sort: "descending"
    });
  }

  setSort(e){
    const input = e.target.value;
    console.log(input);
    this.setState({
      searchFilter: input
    })
  }

  render() {
    let tweets = this.state.tweets.slice();

    if(this.state.sort === "descending"){
      tweets.reverse();
    }

    if(this.state.sort === "mari"){
      tweets = tweets.filter(tweet =>{
        return tweet.username.match("mari");
      });
    }

    if(this.state.searchFilter >= "mari"){
      tweets = tweets.filter(tweet =>{
        return tweet.username.match("mari");
      });
    }

    const tags = tweets.map((tweet,i) =>{

      return(
        <Tweet username ={tweet.username} body ={tweet.body}key ={i}>

        </Tweet>
      );
    });

    return (
      <div className="App">
        <input onChange = {this.setSort}type = "text"></input>
        <button onClick ={this.sortAscending}>Ascending</button>
        <button onClick ={this.sortDescending}>Desceding</button>
        {tags}
      </div>
    );
  }
}

export default App;
