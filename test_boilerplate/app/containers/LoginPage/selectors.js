import { createSelector } from 'reselect';
import { debug } from 'util';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('login');
const selectHomePageDomain = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => {
   return substate.toJS()
  }
);

export const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);


export {
  selectLoginPageDomain,
  makeSelectLoginPage
}
