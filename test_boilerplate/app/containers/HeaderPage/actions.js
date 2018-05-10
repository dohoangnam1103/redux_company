/*
 *
 * HeaderPage actions
 *
 */

import {
  DEFAULT_ACTION,
  USER_LOGIN
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actUserLogin() {
  return {
    type: USER_LOGIN,
  };
}
