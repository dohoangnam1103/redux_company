/*
 *
 * HeaderPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  USER_LOGIN
} from './constants';

const initialState = fromJS({
  isLogin: false
});

function headerPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case USER_LOGIN:
      return state.set('isLogin', true);

    default:
      return state;
  }
}

export default headerPageReducer;
