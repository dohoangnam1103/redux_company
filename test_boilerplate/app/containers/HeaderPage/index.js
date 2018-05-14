/**
 *
 * HeaderPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectLoginPage } from '../LoginPage/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeaderPage from './selectors';
// import { makeSelectloginPage } from './selectors';
import { makeSelectGloble } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';

export class HeaderPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  
  render() {

    let route;

    if (this.props.userCurrent.isLogin) {
      route = [
        {
          link: '/profile?id='+this.props.userCurrent.id,
          title: this.props.userCurrent.userName
        },
        {
          link: '/setting',
          title: 'Settings'
        },
        {
          link: '/newpost',
          title: 'New Post'
        },
        {
          link: '/',
          title: 'Home'
        },
      ]; 

      
    } else {
      route = [
        {
          link: '/signup',
          title: 'Sign Up'
        },
        {
          link: '/signin',
          title: 'Sign in'
        },
        {
          link: '/',
          title: 'Home'
        },
      ]; 
    }

    
    return (
      <div>
        <Helmet>
          <title>HeaderPage</title>
          <meta name="description" content="Description of HeaderPage" />
        </Helmet>
        <Header routeConfig={route} ></Header>
      </div>
    );
  }
}

HeaderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headerpage: makeSelectHeaderPage(),
  // loginPage: makeSelectloginPage(),
  globalVariable : makeSelectGloble(),
  userCurrent: makeSelectLoginPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'headerPage', reducer });
const withSaga = injectSaga({ key: 'headerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderPage);
