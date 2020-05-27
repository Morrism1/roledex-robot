import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/card-list/search-box/search-box.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };
  }
 async componentDidMount(){
   await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const {monsters,searchField} = this.state;
    const FilteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Roledex</h1>
      <SearchBox 
        placeholder='Enter monster name'
        handleChange={e=>this.setState({searchField: e.target.value})}
      />
       <CardList monsters = {FilteredMonsters} />
      </div>
    );
  }
}

export default App;
