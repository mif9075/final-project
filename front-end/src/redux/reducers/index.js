import { combineReducers } from 'redux';
import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer'
import playerFeducer from './playerReducer'

export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    player: playerFeducer
});