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
    const { title, body, author, createdAt, favoritesCount, tagList } = this.props.ele;
    let xhtml;
    if( tagList.length > 0 ) {
      xhtml = tagList.map(ele => {
        return <li key={ele} className="tag-default tag-pill tag-outline">{ ele }</li>
      })
    }


    return (
      <div className='article-preview text-xs-left'>
        <div className='article-meta'>
          <Link to='/'>
            <img src={author.image} />
          </Link>
          <div className="info">
            <a className="author" href="#@ahmedmohsen">{ author.username }</a>
            <span className="date">{ createdAt }</span>
          </div>

          <div className="pull-xs-right">
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart">{ favoritesCount }</i>
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
            {xhtml}
          </ul>
        </Link>


        
      </div>
    );
  }
}

ItemPost.propTypes = {

};

export default ItemPost;
