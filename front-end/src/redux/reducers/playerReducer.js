import { GET_ALL_PLAYERS, GET_PLAYER_BY_ID, GET_ALL_USER_PLAYERS } from '../actionTypes/actionTypes';

const initialState = {
   players: [],
   message: null,
   player: null,
   userPlayers: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_USER_PLAYERS:
      return {
        ...state, 
        userPlayerss: [...action.payload]
      }

    case GET_ALL_PLAYERS: 
      return {
        ...state, 
        players: [...action.payload]
      }

    case GET_PLAYER_BY_ID: 
    
      return {
        ...state, 
        player: action.payload
      }  
    
    default:
      return state;
  }
}