import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import Search from './Search';
import Sortbox from './Sortbox';
import Filterbox from './Filterbox';
import Team from './Team';
import Messagebox from './Messagebox';

class App extends Component {

	constructor(props){
		super(props);

		this.setSearch = this.setSearch.bind(this);
		this.selectSortOption = this.selectSortOption.bind(this);
		this.selectFilterOption = this.selectFilterOption.bind(this);
		this.sortList = this.sortList.bind(this);

		this.isolateContact = this.isolateContact.bind(this);
		this.openMessageBox = this.openMessageBox.bind(this);
		this.closeMessageBox = this.closeMessageBox.bind(this);

		this.state = {
			contactList:[{imgsrc:"chadwick.jpg", firstName:"Chadwick",lastName:"Boseman", department:"Graphic Design ",phone:"123-456-7890",email:"chadwick@nyu.edu", address:"New York Office"},{imgsrc:"michael.jpg", firstName:"Michael B.",lastName:"Jordan", department:"Engineering ",phone:"123-456-7890",email:"michael@nyu.edu", address:"New York Office"},{imgsrc:"daniel.jpg", firstName:"Daniel",lastName:"Kaluuya", department:"Product Design ",phone:"123-456-7890",email:"daniel@nyu.edu", address:"New York Office"},{imgsrc:"lupita.jpg", firstName:"Lupita",lastName:"Nyongo", department:"Product Design ",phone:"123-456-7890",email:"lupita@nyu.edu", address:"London Office"},{imgsrc:"danai.jpg", firstName:"Danai",lastName:"Gurira", department:"QA Department",phone:"123-456-7890",email:"danai@nyu.edu", address:"New York Office"},{imgsrc:"martin.jpg", firstName:"Martin",lastName:"Freeman", department:"QA Department",phone:"123-456-7890",email:"martin@nyu.edu", address:"London Office"},{imgsrc:"letitia.jpg", firstName:"Letitia",lastName:"Wright", department:"Engineering ",phone:"123-456-7890",email:"letitia@nyu.edu", address:"New York Office"},{imgsrc:"winston.jpg", firstName:"Winston",lastName:"Duke", department:"QA Department",phone:"123-456-7890",email:"winston@nyu.edu", address:"New York Office"},{imgsrc:"sterling.jpg", firstName:"Sterling",lastName:"Brown", department:"Engineering",phone:"123-456-7890",email:"sterling@nyu.edu", address:"London Office"},{imgsrc:"angela.jpg", firstName:"Angela",lastName:"Basset", department:"Graphic Design",phone:"123-456-7890",email:"angela@nyu.edu", address:"London Office"}],

			//Black Panther was lit

			teams: [{teamName: "Product A Team",members:[["Michael B. Jordan","Project Leader"],["Chadwick Boseman","Lead Designer"],["Daniel Kaluuya","Associate Designer"]]},{teamName: "Product B Team",members: [["Angela Basset","Project Leader"],["Lupita Nyongo","Associate Designer"],["Sterling Brown","Lead Programmer"]]},{teamName: "QA Team",members:[["Danai Gurira","QA Lead"],["Martin Freeman","QA Associate"],["Winston Duke","QA Associate"]]},{teamName: "Web Design Team",members: [["Angela Basset","Lead Designer"],["Letitia Wright","Front End Programmer"],["Sterling Brown","Back End Programmer"]]}],

			search: "",
			sort: "firstName",
			filter: "none",
			messageRecipient: "",
			messageBox: "Off",
			notification: "",
		}		
	}

	setSearch(term){
		this.setState({
			search: term
		});
	}

	isolateContact(contact){
		const toSearch = contact.split("- ")[0];  //contact is in the form "Name- position". split by "- " to isolate the name
		this.setSearch(toSearch);
	}

	selectSortOption(sortOption){
		this.setState({
			sort: sortOption
		});		
	}

	sortList(sort,contacts){ // firstname/lastname/department, copied list of contacts
		
	  	contacts = contacts.sort((a,b)=>{
	  		if(a[sort]<b[sort]){
	  			return -1;
	  		}
	  		else{
	  			return 1;
	  		}
	  	});
	  	return contacts
	}

	selectFilterOption(filter){
		this.setState({
			filter: filter
		});
	}

	openMessageBox(recipient){
		this.setState({
			messageRecipient: recipient,
			messageBox: "On",
			notification: ""
		});
	}

	closeMessageBox(event){
		this.setState({
			messageBox: "Off"
		});
		if(event == "Send"){
			this.setState({
				notification: "animate"
			});
		}
	}

  render() {
  	

  	let allContacts = this.state.contactList.slice();
  	let allTeams = this.state.teams.slice();

  	//search by first name and last name
  	allContacts = allContacts.filter(contact=>{
  		const term = this.state.search.toLowerCase();
  		const fullName = (contact.firstName + " " + contact.lastName).toLowerCase();

  		if(contact.firstName.toLowerCase().match(term)||contact.lastName.toLowerCase().match(term)||fullName.match(term)){
  			return true;
  		}
  		else{
  			return false;
  		}
  	});

  	//filter departments
 	allContacts = allContacts.filter(contact=>{
 		if(this.state.filter == "none"){
 			return true;
 		}				
		else{
			return contact.department.match(this.state.filter);			
		}
	});

  	allContacts = this.sortList(this.state.sort,allContacts); //Sort the list

  	//creates the html for the contacts
  	const contacts = allContacts.map(contact=>{
  		return <Contact imgsrc={contact.imgsrc} firstName={contact.firstName} lastName={contact.lastName} department={contact.department} phone={contact.phone} email={contact.email} address={contact.address} id = {contact.id}onClick = {this.openMessageBox}/>
  	});

  	//creates the html for the teams
  	const teams = allTeams.map(team=>{
  		return <Team teamName = {team.teamName} members = {team.members} onClick = {this.openMessageBox} search = {this.isolateContact}/>
  	});


	//filters are dynamic components
	//create html for filter
  	let allDepartments = ["Engineering","Graphic Design","Product Design","QA Department"];
  	let depFilters = allDepartments.map(department=>{
  		return <option value = {department}>{department}</option>
  	});
  	depFilters.unshift(<option value = "none">Filter Departments: None</option>);

    return (
      <div className="App">
      	<h1>COMMUNE</h1>
	      <div className = "left">      	
	      	<Search text = {this.state.search}onChange = {this.setSearch}/>
	      	<Sortbox onChange = {this.selectSortOption} />
	      	<Filterbox className = "Filter" onChange = {this.selectFilterOption} filters = {depFilters}/>
    	
	      	<h2>Contacts</h2>   	
	        <div className = "Scrollable">{contacts}</div>
	      </div>

	      <div className = "right">
	       	<h2> Teams</h2>
	       	<div className = "Scrollable">{teams}</div>
	       	<Messagebox onClick = {this.closeMessageBox} className = {this.state.messageBox} recipient = {this.state.messageRecipient}/>  {/*Component is hidden until a button is clicked, fills in information based on which contact it came from*/}
	       	<div className = {"notification " + this.state.notification}>Sent!</div>
	      </div>
      </div>
    );
  }
}

export default App;
