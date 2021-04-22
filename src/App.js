import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { render } from '@testing-library/react';
import { Button } from 'reactstrap';
import { CardList } from './Component/card-list/card-list';
import { SearchBox } from './Component/search-object/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
       monsters:[],
       searched:''
       
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
 handlechange=(e)=>{
   this.setState({searched:e.target.value})
 }
  render() {
    const{monsters,searched}=this.state;
    const filtered=monsters.filter(
      monster=>monster.name.toLowerCase().includes(searched.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search Monester' 
        handlechange={this.handlechange}/>
       <CardList monsters={filtered}></CardList>
      </div>
    )
  };
}

export default App;
