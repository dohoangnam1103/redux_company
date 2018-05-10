/**
 *
 * LoginPage
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
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Link, Redirect } from 'react-router-dom';

import { actUserLogin } from '../HeaderPage/actions';
import { actLogin } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      inputEmail : '',
      inputPassword : '',
    }
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

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { inputEmail, inputPassword } = this.state;
    this.props.summitLogin(inputEmail, inputPassword);
  }

  render() {

    console.log(this.props.loginpage);
    if (this.props.loginpage.isLogin) {
      return <Redirect to='/'/>
    }

    return (
      <div className='col-md-6 offset-md-3 col-xs-12'>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>

        <h1 className="text-xs-center">
          <FormattedMessage {...messages.header} />
        </h1>
        <p className='text-xs-center'>
          <Link to='/signup'>
            <FormattedMessage {...messages.needacc} />
          </Link>
        </p>

        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
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
              <FormattedMessage {...messages.signin} />
            </button>
          </fieldset>
        </form>



      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    summitLogin : (email, password) => {
      dispatch(actLogin({email, password}))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
