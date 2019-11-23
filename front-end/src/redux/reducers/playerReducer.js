import { GET_PLAYER_BY_ID } from '../actionTypes/actionTypes';

const initialState = {
    player: null,
    message: null,
  };

  export default function(state = initialState, action) {
    switch (action.type) {

        case GET_PLAYER_BY_ID: 
    
        return {
          ...state, 
          player: action.payload
        }  
      
        default:
        return state;

        }
    }