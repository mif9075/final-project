import { combineReducers } from 'redux';

import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer'
import playersReducer from './playersReducer'
import playerReducer from'./playerReducer'
import searchReducer from './searchReducer'


export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    players: playersReducer,
    player: playerReducer,
    search: searchReducer,
});