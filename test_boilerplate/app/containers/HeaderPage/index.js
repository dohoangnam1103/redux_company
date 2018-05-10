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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeaderPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';

export class HeaderPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  
  render() {
    console.log(this.props);
    const route = [
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
