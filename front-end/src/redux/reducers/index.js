import { combineReducers } from 'redux';

import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer'
import playersReducer from './playersReducer'
import playerReducer from'./playerReducer'
import searchReducer from './searchReducer'
import postsReducer from './postsReducer';
import userReducer from './userReducer'

export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    players: playersReducer,
    player: playerReducer,
    search: searchReducer,
    posts: postsReducer,
    user: userReducer
});