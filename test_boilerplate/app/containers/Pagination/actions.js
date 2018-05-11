/*
 *
 * Pagination actions
 *
 */

import {
  DEFAULT_ACTION,
  CS_CHANGE_PAGE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actChangePage (page, numberShowOnePage) {

  return {
    type: CS_CHANGE_PAGE,
    page,
    numberShowOnePage
    
  }
}

