import { createSelector } from 'reselect';

/**
 * Direct selector to the newPostPage state domain
 */
const selectNewPostPageDomain = (state) => state.get('newPostPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewPostPage
 */

const makeSelectNewPostPage = () => createSelector(
  selectNewPostPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNewPostPage;
export {
  selectNewPostPageDomain,
};
