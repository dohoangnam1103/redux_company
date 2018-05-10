
import { fromJS } from 'immutable';
import paginationReducer from '../reducer';

describe('paginationReducer', () => {
  it('returns the initial state', () => {
    expect(paginationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
