import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import ListItem from './container/ListItem';
import Search from './container/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Search ></Search>
        <ListItem></ListItem>
      </div>
    );
  }
}

export default App;
