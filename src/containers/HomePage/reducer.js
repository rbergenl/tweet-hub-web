import { fromJS } from 'immutable';

import {
  SET_USERNAME,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR
} from './constants';

export const initialState = fromJS({
  username: '',
  repos: false,
  error: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''))
    case LOAD_REPOS_SUCCESS:
      return state.set('repos', action.repos)
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error)
    default:
      return state;
  }
}

export default homeReducer;
