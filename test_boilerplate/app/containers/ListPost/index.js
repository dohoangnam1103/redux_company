/**
 *
 * ListPost
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
import makeSelectListPost from './selectors';

import { makeSelectListPost2 } from './selectors';


import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import ItemPost from '../../components/ItemPost';  

export class ListPost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  
  render() {

    const { data } = this.props.listpost2
    let xhtml;

    
    if ( data !== null && data.articles.length > 0 ) {

      xhtml = data.articles.map(ele => {
          
        return  <ItemPost
                  key={ele.createdAt} 
                  ele={ele}>
                </ItemPost>
      })
    };

    return (
      <div className='col-md-9'>
        <Helmet>
          <title>ListPost</title>
          <meta name="description" content="Description of ListPost" />
        </Helmet>

        <div>
          {xhtml}
        </div>
      </div>
    );
  }
}

ListPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  
  listpost: makeSelectListPost(),
  listpost2: makeSelectListPost2()

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listPost', reducer });
const withSaga = injectSaga({ key: 'listPost', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListPost);
