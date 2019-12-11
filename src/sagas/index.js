import { all, fork} from 'redux-saga/effects';

import getAuthentication from './watchers/getAuthentication';

export default function* root() {
  yield all([
    fork(getAuthentication),
  ]);
}
  