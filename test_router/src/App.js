import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import ListItem from './container/ListItem';
import Search from './container/Search';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    if (this.props.isLogin) {
     return  (
     <div className="App">
      <Header></Header>
      <Search ></Search>
      <ListItem></ListItem>
     </div>)
    }
    return (
      <Redirect to='/login'/>

      
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.ManageUser.isLogin);
  return {
    isLogin : state.ManageUser.isLogin
  }
}

export default connect(mapStateToProps, null)(App);
