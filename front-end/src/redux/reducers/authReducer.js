import { LOGIN_USER_SUCCESS, AUTH_USER_LOGOUT} from '../actionTypes/actionTypes';
import { jwtDecodeTokenAndSetUser} from './authReducerHelpers'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS: 
            return jwtDecodeTokenAndSetUser(state, action.payload)
        case AUTH_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: {}
            }
        default: 
            return state;
    }
}