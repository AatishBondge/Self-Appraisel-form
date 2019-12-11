import { SET_USER_DETAIL } from '../constants';

const initialState = {
    userData : null,
}

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
      case SET_USER_DETAIL :
        return {
          userData: action.payload.data,
        };
      default:
        return state;
    }
  }
  