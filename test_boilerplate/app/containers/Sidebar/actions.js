/*
 *
 * Sidebar actions
 *
 */

import {
  DEFAULT_ACTION,
  CS_GET_TAGS,
  CS_GET_TAGS_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getTag(data) {
  return {
    type: CS_GET_TAGS,
    data
  };
}


export function actGetError(data) {
  return {
    type: CS_GET_TAGS_ERROR,
    data
  };
}