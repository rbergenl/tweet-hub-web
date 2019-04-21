import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const selectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const selectRepos = () =>
  createSelector(selectHome, homeState => homeState.get('repos'));

export { selectUsername, selectRepos }
