/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CS_SIGN_UP,
  CS_SIGN_UP_ERROR,
  CS_SIGN_UP_SUCCESS
} from './constants';

const initialState = fromJS({
  
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    // case DEFAULT_ACTION:
    //   return state;

    case CS_SIGN_UP:
      return state;
    
    case CS_SIGN_UP_ERROR:
      console.log(action.error);

    case CS_SIGN_UP_SUCCESS:
      console.log(action);
      
      return state;



    default:
      return state;
  }
}

export default signUpPageReducer;
