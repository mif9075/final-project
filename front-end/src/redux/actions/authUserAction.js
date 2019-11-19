import { REGISTER_SUCCESS_MESSAGE, REGISTER_ERROR_MESSAGE, LOGIN_USER_SUCCESS, AUTH_USER_LOGOUT } from '../actionTypes/actionTypes';
import setAuthToken from '../../lib/setAuthToken';
import Axios from '../../lib/Axios';

export const register = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/register', userInfo);
        dispatch(RegisterSuccessMessage(success.data.message));
        return Promise.resolve(success.data.message)
    } catch (error) {
        return Promise.reject(error);
    }
}

const RegisterSuccessMessage = (message) => dispatch => {
    dispatch({
        type: REGISTER_SUCCESS_MESSAGE,
        payload: message
    })
}

export const RegisterErrorMessage = (message) => dispatch => {
    dispatch({
        type: REGISTER_ERROR_MESSAGE,
        payload: message
    })
}

export const login = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/login', userInfo);

        const { token } = success.data;

        dispatch(loginUserSuccess(token));
        setAuthToken(token);
        localStorage.setItem('jwtToken', token);
        return Promise.resolve('Login successful');
    } catch(error) {
        console.log(error)
        return Promise.reject(error);
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch({
        type: AUTH_USER_LOGOUT
    });
}

export const loginUserSuccess = (userInfo) => dispatch => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: userInfo
    })
}

