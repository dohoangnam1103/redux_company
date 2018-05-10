/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CS_LOGIN,
  CS_LOGIN_SUCCESS,
  CS_LOGIN_ERROR,
  CS_SAVE_DATA_USER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actLogin(payload) {
  return {
    type: CS_LOGIN,
    payload
  };
}

export function actLoginSuccess(payload) {
  return {
    type: CS_LOGIN_SUCCESS,
    payload
  };
}

export function actLoginError(payload) {
  return {
    type: CS_LOGIN_ERROR,
    payload
  };
}

export function actSaveDataUserToLocal(payload) {
  return {
    type: CS_SAVE_DATA_USER,
    payload
  };
}
