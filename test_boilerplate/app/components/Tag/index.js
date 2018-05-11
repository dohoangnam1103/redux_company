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
        <a className="tag-default tag-pill">{this.props.data}</a>
    );
  }
}

Tag.propTypes = {

};

export default Tag;
