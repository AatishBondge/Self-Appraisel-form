import { 
    SET_USER_DETAIL,
    GET_USER_TOKEN_SAGA
 } from '../constants'


export function getAuthenticate(user) {
    return {
      type: GET_USER_TOKEN_SAGA,
      payload: { user },
    };
}

export function setUserData(data){
    return {
        type : SET_USER_DETAIL,
        payload : {data}
    };
}
