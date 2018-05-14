/**
 *
 * Sidebar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSidebar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { actFilterTag } from './actions';

export class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  handleClick = (e) => {
    e.preventDefault();
    
    this.props.filterTag(e.target.innerHTML);
  }
  
  render() {
    
    const xhtml = this.props.sidebar.listTag.map(ele=> {
      return <a key={ele} onClick={this.handleClick} className="tag-default tag-pill">{ele}</a>

    })

    return (
      <div className='col-md-3'>
        <div className="sidebar">
          <p><FormattedMessage {...messages.header} /></p>
          <div className="tag-list">
            {xhtml}
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebar: makeSelectSidebar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    filterTag : (tag) => {
      dispatch (actFilterTag(tag))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sidebar', reducer });
const withSaga = injectSaga({ key: 'sidebar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Sidebar);
