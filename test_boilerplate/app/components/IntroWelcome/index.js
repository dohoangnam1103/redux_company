/**
*
* IntroWelcome
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class IntroWelcome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>
            <FormattedMessage {...messages.title} />
          </h1>
          <p>
            <FormattedMessage {...messages.desc} />
          </p>
        </div>
      </div>
    );
  }
}

IntroWelcome.propTypes = {

};

export default IntroWelcome;
