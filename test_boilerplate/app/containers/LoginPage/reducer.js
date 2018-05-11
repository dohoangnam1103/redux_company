/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CS_LOGIN_SUCCESS,
  CS_LOGIN_ERROR
} from './constants';

const initialState = fromJS({
  isLogin: false,
  username: '',
  emailUser: '',
  createdAt: '',
  updatedAt: '',
  image: '',
  id : 0,
  token : ''
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case CS_LOGIN_SUCCESS:
      const { id, email, createdAt, updatedAt, username, image, token } = action.payload.user;
      // state.set('data', action.data)
      // debugger
      return  state
                .set('isLogin', true)
                .set('userName', username)
                .set('emailUser', email)
                .set('createdAt', createdAt)
                .set('updatedAt', updatedAt)
                .set('id', id)
                .set('token', token)
                .set('image', image)

    default:
      return state;
  }
}

export default loginPageReducer;
