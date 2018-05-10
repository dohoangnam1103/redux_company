/**
 *
 * Pagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPagination from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <nav>
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="">1</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Pagination.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pagination: makeSelectPagination(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'pagination', reducer });
const withSaga = injectSaga({ key: 'pagination', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Pagination);
