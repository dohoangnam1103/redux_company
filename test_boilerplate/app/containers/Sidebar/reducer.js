/*
 *
 * Sidebar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CS_GET_TAGS
} from './constants';

const initialState = fromJS({
  listTag: []
});

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case CS_GET_TAGS:
      return state.set('listTag',action.data.tags)
      
    default:CS_GET_TAGS
      return state;
  }
}

export default sidebarReducer;
