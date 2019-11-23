import { GET_ALL_PLAYERS, GET_ALL_USER_PLAYERS } from '../actionTypes/actionTypes';

const initialState = {
   players: [],
   message: null,
   userPlayers: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_USER_PLAYERS:
      return {
        ...state, 
        userPlayers: [...action.payload]
      }

    case GET_ALL_PLAYERS: 
      return {
        ...state, 
        players: [...action.payload]
      }
    
    default:
      return state;
  }
}