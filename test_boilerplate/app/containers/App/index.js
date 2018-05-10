/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LoginPage from 'containers/LoginPage';
import SignUpPage from 'containers/SignUpPage/Loadable';
import ListPost from 'containers/ListPost/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import HeaderPage from '../HeaderPage';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <HeaderPage></HeaderPage>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </AppWrapper>
  );
}
