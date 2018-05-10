/*
 *
 * SignUpPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CS_SIGN_UP,
  CS_SIGN_UP_ERROR,
  CS_SIGN_UP_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actSignUp(payload) {
  return {
    type: CS_SIGN_UP,
    payload
  };
}

export function signupError(error) {
  return {
    type: CS_SIGN_UP_ERROR,
    error
  };
}


export function signupSuccess(error) {
  return {
    type: CS_SIGN_UP_SUCCESS,
    error
  };
}

