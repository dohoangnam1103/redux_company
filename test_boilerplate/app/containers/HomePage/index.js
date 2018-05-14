/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import IntroWelcome from 'components/IntroWelcome';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, actChangeSelectFeed } from './actions';
import { makeSelectUsername } from './selectors';
import { makeSelectGloble } from './selectors';
import { makeSelectLoginPage } from '../LoginPage/selectors';
import reducer from './reducer';
import saga from './saga';

import { NavLink } from 'react-router-dom';

import ListPost from '../ListPost/Loadable';
import Pagination from '../Pagination/Loadable';
import Sidebar from '../Sidebar/Loadable';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  constructor (props) {
    super (props);

    this.state = {
      pageNow  : 'global'
    }
  }

  handleChangePageNow (page, e) {
    e.preventDefault();
    this.setState({
      pageNow : page
    })
    this.props.onChangeSelectFeed(page);
  }

  render() {
    const {
      loading,
      error,
      repos,
      userName
    } = this.props;

    const reposListProps = {
      loading,
      error,
      repos,
    };

    let xhtml;
    let classStyleGlobalFeed = (this.state.pageNow === 'global')? "nav-link active": "nav-link";
    let classStyleMyFeed = (this.state.pageNow === 'myFeed')? "nav-link active": "nav-link";

    if ( this.props.userName.isLogin ) {
      xhtml = (<ul className="nav nav-pills outline-active">
                <li onClick={(e) => this.handleChangePageNow('global', e)} className="nav-item">
                  <a className={classStyleGlobalFeed}>
                    Global Feed
                  </a>
                </li>
                <li onClick={(e)=>this.handleChangePageNow('myFeed', e)} className="nav-item">
                  <a className={classStyleMyFeed}>
                    My Feed
                  </a>
                </li>
              </ul>)
    } else {
      xhtml = (<ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink to='global-feed' className="nav-link active">
                    Global Feed
                  </NavLink>
                </li>
                </ul>)
    }

    return (

      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className='home-page'>
          <CenteredSection>
            <IntroWelcome></IntroWelcome>
            <div className="container page">
              <div className="row">
                <div className="col-md-9">
                  <div className="feed-toggle">
                    {xhtml}
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <ListPost ></ListPost>
              <Sidebar></Sidebar>
            </div>
            <Pagination></Pagination>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onChangeSelectFeed : (data) => {
      dispatch(actChangeSelectFeed(data));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  globalVariable : makeSelectGloble(),
  userName: makeSelectLoginPage()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
