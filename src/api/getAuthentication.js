import axios from 'axios'

const getAccessTokenApi = `http://127.0.0.1:8080/api/user`
export const getAuthenticate = (user) => {
    const headers = {
    'Content-Type': 'application/json',
    };

     return axios.post(getAccessTokenApi, { emailId : user.username, password : user.password}, headers)
}
