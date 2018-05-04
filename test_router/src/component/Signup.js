import React, { Component } from 'react';

import { firebaseApp } from '../index';


class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputID : '',
      inputPass: '',
      inputPassRe : '',
      message: ''
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

  handleChangePassRe = (e) => {
    this.setState({
      inputPassRe: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputPass === this.state.inputPassRe) {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.state.inputID, this.state.inputPass)
        .then( data => {
          this.setState({
            inputID : '',
            inputPass: '',
            inputPassRe : '',
            message: 'Registered success'
          })
        })
        .catch(data => {
          console.log(data.message);
          this.setState({
            message: data.message
          })
        });
        
      // console.log();
    } else {
      console.log('no match');
    }
  }

  render() {
    return (
      <div className="App">
        <p>Registered</p>
        <form onSubmit={this.handleSubmit}>
          <p>ID</p>
          <input onChange={this.handleChangeID} value={this.state.inputID}></input>
          <p>Pass</p>
          <input type='password' onChange={this.handleChangePass} value={this.state.inputPass}></input>
          <p>PassRe</p>
          <input type='password' onChange={this.handleChangePassRe} value={this.state.inputPassRe}></input>
          <button>Sign up</button>
        </form>
        <p className='message'>{this.state.message}</p>
      </div>
    );
  }
}

export default SignUp;
