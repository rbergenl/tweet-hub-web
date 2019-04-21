import { put, takeLatest } from 'redux-saga/effects';
import { SET_USERNAME } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

function* fetchRepos({ name }) {
   try {
      const repos = yield fetch(`https://api.github.com/users/${name}/repos`)
                            .then(response => response.json());
      yield put(reposLoaded(repos));
   } catch (e) {
      yield put(repoLoadingError(e.message));
   }
}

function* homeSaga() {
  yield takeLatest(SET_USERNAME, fetchRepos);
}

export default homeSaga;
