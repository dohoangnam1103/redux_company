
import { fromJS } from 'immutable';
import listPostReducer from '../reducer';

describe('listPostReducer', () => {
  it('returns the initial state', () => {
    expect(listPostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
