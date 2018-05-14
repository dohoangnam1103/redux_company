/**
 *
 * NewPostPage
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
import makeSelectNewPostPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class NewPostPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NewPostPage</title>
          <meta name="description" content="Description of NewPostPage" />
        </Helmet>


        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" placeholder="Article Title" type="text" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control" placeholder="What's this article about?" type="text" />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea className="form-control" rows={8} placeholder="Write your article (in markdown)" defaultValue={""} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control" placeholder="Enter tags" type="text" />
                    <div className="tag-list" />
                  </fieldset>
                  <button className="btn btn-lg pull-xs-right btn-primary" type="button">Publish Article</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

NewPostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newpostpage: makeSelectNewPostPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newPostPage', reducer });
const withSaga = injectSaga({ key: 'newPostPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewPostPage);
