import { combineReducers } from 'redux';

import setUserDataReducer from './setUserDataReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    setUserDataReducer,
    errorReducer
})