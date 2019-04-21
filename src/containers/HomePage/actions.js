import {
  SET_USERNAME,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR
} from './constants';

export function setUsername(name) {
  return {
    type: SET_USERNAME,
    name,
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
