/**
*
* Tag
*
*/

import React from 'react';

import { Link } from 'react-router-dom';
// import styled from 'styled-components';


class Tag extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      
        <Link to='/' className="tag-default tag-pill">{this.props.data}</Link>
      
    );
  }
}

Tag.propTypes = {

};

export default Tag;
