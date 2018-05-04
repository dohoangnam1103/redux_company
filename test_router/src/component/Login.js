import React, { Component } from 'react';

import { firebaseApp } from '../index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../container/Header';
import ListItem from '../container/ListItem';
import Search from '../container/Search';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputID : '',
      inputPass: ''
    }
  }

  handleChangeID = (e) => {
    this.setState({
      inputID: e.target.value
    })
  }

  handleChangePass = (e) => {
    this.setState({
      inputPass: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.inputID, this.state.inputPass)
      .then(data =>
        {
          console.log(data);
          <Redirect to="/somewhere/else"/>
        }

      ).catch(data =>
        {
          console.log(data);
        }
      )

  }

  render() {
    if (this.props.isLogin){
      // console.log(this);
      return (<Redirect to="/"/>)
    }
    
    
    return (
      <div className="App">
        <p>Login</p>
        <form onSubmit={this.handleSubmit}>
          <p>ID</p>
          <input onChange={this.handleChangeID} value={this.state.inputID}></input>
          <p>Pass</p>
          <input type='password' onChange={this.handleChangePass} value={this.state.inputPass}></input>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.ManageUser.isLogin);
  return {
    isLogin : state.ManageUser.isLogin
  }
}

export default connect(mapStateToProps, null)(Login);
