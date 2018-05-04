import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../index';

class InforUser extends Component {
  handleLogout = () => {
    firebaseApp.auth().signOut().then(
      this.props.LogoutUser()
    );
  }

  render() {
        const {emailUser} = this.props.user;
        let xhtml ='';
        if (emailUser !== ''){
          xhtml= <div className='user-infor'>
            <p>{this.props.user.emailUser}</p>
            <p onClick={this.handleLogout}>Logout</p>

          </div>
        } else {
          xhtml= <div className='user-infor'></div>
        }
        return (
          <div>
            {xhtml}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user : state.ManageUser
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    LogoutUser : () => {
      console.log('456');
      dispatch({type: 'LOGOUT_USER'});
    } 
  }
}

export default connect(mapStateToProps, mapDispathToProps)(InforUser);
