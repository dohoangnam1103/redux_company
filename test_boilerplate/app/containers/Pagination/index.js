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
import { makeSelectPagination2 } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Link } from 'react-router-dom';

export class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const ItemInOnePage = 10;
    let numberpage;
    let totalItem = 0;
    let xhtml = [];
    
    // console.log(this.props.pagination2.data.articlesCount);
    if (this.props.pagination2.data) {
      console.log(this.props.pagination2.data.articlesCount);
      totalItem = this.props.pagination2.data.articlesCount;
    }
    
    if (totalItem > 0) {
      numberpage = Math.ceil(totalItem / ItemInOnePage);
    }

    if (numberpage > 0) {
      for (let i = 0; i < numberpage; i++){
        xhtml.push(<Link key={i} to={{
          pathname: 'pagination',
          search: '?page'+ (i + 1)

        }} className="page-link page-item">{i + 1}</Link>)
      }
    }

    return (
      <div className='container'>
        <nav>
          <ul className="pagination">
            {xhtml}
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
  pagination2: makeSelectPagination2()
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
