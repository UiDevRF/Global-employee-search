import React,{Component} from 'react';
import './App.css';
import './components/card-list/card-list.component';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      employees: [
        //emplty state
      ],
      searchField:''
    };
  }

  handleChange = (e) => (
    this.setState({searchField : e.target.value})
  )
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")    
    .then(response => response.json())
  //  .then(response => console.log(response))
    .then(users => this.setState({employees:users}));

  }
  render(){
    const {employees,searchField} = this.state;
    const filteredemployees = employees.filter(employee => 
      employee.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">

    <SearchBox
     placeholder='search employees'
     handleChange={this.handleChange} 
     />
  <CardList employees={filteredemployees}/>      
    </div>
  );
  }
}

export default App;

