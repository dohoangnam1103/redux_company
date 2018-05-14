
import { fromJS } from 'immutable';
import newPostPageReducer from '../reducer';

describe('newPostPageReducer', () => {
  it('returns the initial state', () => {
    expect(newPostPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
