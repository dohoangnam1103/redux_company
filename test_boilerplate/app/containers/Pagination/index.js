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

import { actChangePage } from './actions'

export class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props);
    this.state = {
      currentPage : 1,
      ItemInOnePage: 10
    }
    
  }
  
  handleClick = (ele) => {
    ele.preventDefault();

    const valuePage = parseInt(ele.target.innerHTML);
    this.props.changePage(valuePage, this.state.ItemInOnePage);
    this.setState({
      currentPage: valuePage
    })
  }

  render() {
    const {ItemInOnePage} = this.state;
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
        const classStyle = (i+1 === this.state.currentPage) ? 'page-item active' : 'page-item';
        xhtml.push(<li  key={i} className={classStyle} onClick={this.handleClick}>
                      <a className="page-link" href="">{i + 1}</a>
                    </li>)
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
    changePage : (page, ItemInOnePage) => {
      dispatch(actChangePage(page, ItemInOnePage))
    }
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
