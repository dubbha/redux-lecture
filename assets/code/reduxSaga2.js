// actions.js
export const fetchUser = uid => ({ type: 'FETCH_USER', uid });  // sync trigger action
export const saveUser = user => ({ type: 'SAVE_USER', user });

// sagas.js
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { saveUser } from './actions';

function* fetchUserSaga({ uid }) {                                      // worker saga
  const user = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
      .then(response => response.json())
  );
  yield put(saveUser(user));
}

function* watchFetchUserSaga() {                                       // watcher saga
  yield takeEvery('FETCH_USER', fetchUserSaga);                       // or takeLatest
}

export function* rootSaga() {                                            // root saga
  yield all([
    watchFetchUserSaga(),
    // ...other sagas
  ]);
}