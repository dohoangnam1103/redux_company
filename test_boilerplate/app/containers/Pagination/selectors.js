import { createSelector } from 'reselect';

/**
 * Direct selector to the pagination state domain
 */
const selectPaginationDomain = (state) => state.get('pagination');

const selectPaginationDomain2 = (state) => state.get('home');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Pagination
 */

const makeSelectPagination = () => createSelector(
  selectPaginationDomain,
  (substate) => substate.toJS()
);

export default makeSelectPagination;
export {
  selectPaginationDomain,
};

export const makeSelectPagination2 = () => createSelector(
  selectPaginationDomain2,
  (substate) => substate.toJS()
);
