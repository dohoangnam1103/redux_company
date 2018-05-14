/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const statusFetchSuccess = 200;
export const CsDataSucces = 'GET_DATA_SUCCES';
export const CsDataError = 'GET_DATA_ERROR';
export const CS_LOGIN_SUCCESS = 'START_LOGIN_SUCCESS';
export const CS_CHANGE_SELECT_FEED = 'CHANGE_SELECT_FEED';

