/**
*
* ItemPost
*
*/

import React from 'react';
// import styled from 'styled-components';

import TitleArticles from './TitleArticles';
import DescItem from './DescItem';
import Readmore from './Readmore';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ItemPost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props);
    const { title, body } = this.props.ele;

    return (
      <div className='article-preview'>
        <div className='article-meta'>
          <Link to='/'>
            <img src="https://static.productionready.io/images/smiley-cyrus.jpg" />
          </Link>
          <div className="info">
            <a className="author" href="#@ahmedmohsen">ahmedmohsen</a>
            <span className="date">Thu May 10 2018</span>
          </div>

          <div className="pull-xs-right">
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart">1</i>
            </button>
          </div>
        
        </div>
        {/* <FormattedMessage {...messages.header} /> */}

        <Link to='/' className='preview-link'>
          <TitleArticles> {title} </TitleArticles>
          <DescItem>{body}</DescItem>
          <Readmore>
            <FormattedMessage {...messages.readmore} />
          </Readmore>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">sdfds</li>
            <li className="tag-default tag-pill tag-outline">sdfsdfds</li>
          </ul>
        </Link>


        
      </div>
    );
  }
}

ItemPost.propTypes = {

};

export default ItemPost;
