import { createSelector } from 'reselect';

/**
 * Direct selector to the pagination state domain
 */
const selectPaginationDomain = (state) => state.get('pagination');

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
