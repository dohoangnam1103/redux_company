/*
 *
 * Sidebar actions
 *
 */

import {
  DEFAULT_ACTION,
  CS_GET_TAGS,
  CS_GET_TAGS_ERROR,
  CS_FILTER_TAG
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

export function actFilterTag(tag) {
  return {
    type: CS_FILTER_TAG,
    tag
  };
}