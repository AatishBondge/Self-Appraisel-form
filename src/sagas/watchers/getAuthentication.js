import { put, takeLatest, call } from 'redux-saga/effects';

import {
    GET_USER_TOKEN_SAGA,
    SET_ERROR_STATE
} from '../../constants';
import {
  setUserData
} from '../../actions/userAction.js';
import { getAuthenticate, getUserData } from '../../api/getAuthentication';

function* workergetAuthenticationSaga({ payload: { user } }) {
  try{    
    const response = yield call(getAuthenticate, user );
    // console.log(response);
    // const { id, access_token } = response.data;    
    // const userData = yield call(getUserData, {access_token, id});      
    // yield put(setUserData(userData.data.profile_user)) 
    yield put(setUserData(response.data)) 
  }
  catch (err) {
    if (err.response && err.response.data) {
      const errorData = err.response.data;
      yield put({ type: SET_ERROR_STATE, errorData });
    }
  }
}

export default function* watchgetAuthenticationSaga() {
  yield takeLatest(GET_USER_TOKEN_SAGA, workergetAuthenticationSaga);
}
