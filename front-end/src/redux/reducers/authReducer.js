import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from '../actionTypes/actionTypes';
import { jwtDecodeTokenAndSetUser} from './authReducerHelpers'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS: 
            return jwtDecodeTokenAndSetUser(state, action.payload)
        case LOGOUT_USER_SUCCESS:
            return {
                isAuthenticated: false,
                user: {}
            }
        default: 
            return state;
    }
}