import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import Search from './Search';
import Filterbox from './Filterbox';

class App extends Component {

	constructor(props){
		super(props);

		this.setSearch = this.setSearch.bind(this);
		this.selectSortOption = this.selectSortOption.bind(this);
		this.sortList = this.sortList.bind();

		this.state = {
			contactList:[{imgsrc:"chadwick.jpg", firstName:"Chadwick",lastName:"Boseman", department:"Acting Department",phone:"(123)456-7890",email:"chadwick@gmail.com", address:"New York City,United States"},{imgsrc:"chadwick.jpg", firstName:"Michael B.",lastName:"Jordan", department:"Acting Department",phone:"(123)456-7890",email:"michael@gmail.com", address:"New York City,United States"},{imgsrc:"chadwick.jpg", firstName:"Daniel",lastName:"Kaluuya", department:"Human Resources",phone:"(123)456-7890",email:"daniel@gmail.com", address:"London,United Kingdom"}],
			searchTerm: "",
			sort: "firstName: Ascending",
		}		
	}

	setSearch(term){
		this.setState({
			search: term
		});
	}

	selectSortOption(sortOption){
		this.setState({
			sort: sortOption
		});		
	}

	sortList(sort,contacts){ //ascending/descending, firstname/lastname/department, copied list of contacts
		const sorter = sort.split(": ");
	  	contacts = contacts.sort((a,b)=>{
	  		if(a[sorter[0]]<b[sorter[0]]){
	  			return -1;
	  		}
	  		else{
	  			return 1;
	  		}
	  	});
	  	if(sort.indexOf("Desc")>=0){
	  		contacts = contacts.reverse();
	  	}
	  	return contacts
	}

  render() {
  	let allContacts = this.state.contactList.slice();

  	//search by first name, last name, or department
  	//TO DO: GET RID OF CASE SENSITIVITY
  	allContacts = allContacts.filter(contact=>{
  		if(contact.firstName.match(this.state.search)||contact.lastName.match(this.state.search)||contact.department.match(this.state.search)){
  			return true;
  		}
  		else{
  			return false;
  		}
  	});

  	allContacts = this.sortList(this.state.sort,allContacts); //Sort the list

  	//creates the html for the contacts
  	const contacts = allContacts.map(contact=>{
  		return <Contact imgsrc={contact.imgsrc} firstName={contact.firstName} lastName={contact.lastName} department={contact.department} phone={contact.phone} email={contact.email} address={contact.address}/>
  	});

    return (
      <div className="App">
      	<h1>COMMUNE</h1>
      	<Filterbox onChange = {this.selectSortOption} />
      	<Search onChange = {this.setSearch}/>
        <div>{contacts}</div>
       
      </div>
    );
  }
}

export default App;
