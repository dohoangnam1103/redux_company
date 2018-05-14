/**
 *
 * SignUpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignUpPage from './selectors';
// import { makeSelectloginPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Link } from 'react-router-dom';
import { actSignUp } from './actions';
import { Redirect } from 'react-router-dom';

export class SignUpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      inputEmail : '',
      inputPassword : '',
    }
  }

  handleChangeUser = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handleChangeEmail = (e) => {
    this.setState({
      inputEmail: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      inputPassword: e.target.value
    })
  }

  handleSubmitSignUp = (e) => {
    e.preventDefault();
    const { userName, inputEmail, inputPassword } = this.state;

    this.props.submitSignUp({ userName, inputEmail, inputPassword });
  }
  
  render() {
    if (this.props.signuppage.isLogin) {
      return <Redirect to='/'/>
    }

    return (
      <div className='col-md-6 offset-md-3 col-xs-12'>
        <Helmet>
          <title>SignUpPage</title>
          <meta name="description" content="Description of SignUpPage" />
        </Helmet>

        <h1 className="text-xs-center">
          <FormattedMessage {...messages.header} />
        </h1>
        <p className='text-xs-center'>
          <Link to='/signin'>
            <FormattedMessage {...messages.haveacc} />
          </Link>
        </p>

        <form onSubmit={this.handleSubmitSignUp}>
          <fieldset>

            <fieldset className="form-group">
              <input 
                value={this.state.userName}
                onChange={this.handleChangeUser}
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Username" 
              />
            </fieldset>



            <fieldset className="form-group">
              <input 
                value={this.state.inputEmail}
                onChange={this.handleChangeEmail}
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Email" 
                />
            </fieldset>

            <fieldset className="form-group">
              <input 
                value={this.state.inputPassword}
                onChange={this.handleChangePassword}
                type="password" 
                className="form-control form-control-lg" 
                placeholder="Password" 
              />
            </fieldset>

            

            <button 
              className="btn btn-lg btn-primary pull-xs-right" 
              type="submit">
              <FormattedMessage {...messages.signup} />
            </button>
          </fieldset>
        </form>

      </div>
    );
  }
}

SignUpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignUpPage(),
  // loginpage: makeSelectloginPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    submitSignUp : (payload) => {
      dispatch(actSignUp(payload));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpPage', reducer });
const withSaga = injectSaga({ key: 'signUpPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
