import { SET_ERROR_STATE } from '../constants';

const initialState = {
  error_data: null,
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR_STATE:
      return {
        ...state,
        error_data: action.errorData,
      };

    default:
      return state;
  }
}
