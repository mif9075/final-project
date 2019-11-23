import { combineReducers } from 'redux';
import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer'
import playersReducer from './playersReducer'
import playerReducer from'./playerReducer'

export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    players: playersReducer,
    player: playerReducer
});