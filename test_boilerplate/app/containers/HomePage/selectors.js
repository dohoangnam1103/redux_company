/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');
const selectGloble = (state) => state.get('global');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

export  const makeSelectGloble = () => createSelector(
  selectGloble,
  (substate) => substate.toJS()
);

export {
  selectHome,
  makeSelectUsername,
};
