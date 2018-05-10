import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import LogoStyle from './LogoStyle';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const xhtml = this.props.routeConfig.map(ele => {
      return <HeaderLink key={ele.title} to={ele.link}>
        <span>{ele.title}</span>
      </HeaderLink>
    })
    return (
      <div>
        <NavBar>

            <LogoStyle to="/">
              Logo
            </LogoStyle>
            {xhtml}
        </NavBar>
      </div>
    );
  }
}

export default Header;
