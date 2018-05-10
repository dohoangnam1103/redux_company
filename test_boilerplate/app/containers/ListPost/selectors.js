import { createSelector } from 'reselect';

/**
 * Direct selector to the listPost state domain
 */
const selectListPostDomain = (state) => state.get('listPost');
const selectListPostDomain2 = (state) => state.get('home');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListPost
 */

const makeSelectListPost = () => createSelector(
  selectListPostDomain,
  (substate) => substate.toJS()
);

export default makeSelectListPost;
export {
  selectListPostDomain,
};

export const makeSelectListPost2 = () => createSelector(
  selectListPostDomain2,
  (substate) => substate.toJS()
)