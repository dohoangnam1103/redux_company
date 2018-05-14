/*
 *
 * Pagination reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CS_CHANGE_PAGE
} from './constants';

const initialState = fromJS({
  pageCurrent : 1
});

function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case CS_CHANGE_PAGE:
      return state

    default:
      return state;
  }
}

export default paginationReducer;
