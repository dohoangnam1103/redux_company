import { createSelector } from 'reselect';

/**
 * Direct selector to the headerPage state domain
 */
const selectHeaderPageDomain = (state) => state.get('headerPage');

const selectLoginPageDomain = (state) => state.get('headerPage');

const selectGloble = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HeaderPage
 */

const makeSelectHeaderPage = () => createSelector(
  selectHeaderPageDomain,
  (substate) => substate.toJS()
);

export const makeSelectloginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
)

export  const makeSelectGloble = () => createSelector(
  selectGloble,
  (substate) => substate.toJS()
);

export default makeSelectHeaderPage;
export {
  selectHeaderPageDomain,
};
