import { GET_ALL_PLAYERS, 
        //  GET_ALL_USER_PLAYERS, 
         ALL_PLAYERS,
         ACTIVE_PLAYERS,
         RETIRED_PLAYERS
        } from '../actionTypes/actionTypes';

const initialState = {
   players: [],
   message: null,
//    userPlayers: [],
   firstCallPlayers: [],
   filterActivePlayers: [],
   filterRetiredPlayers: [],
 };

export default function(state = initialState, action) {
  switch (action.type) {

    // case GET_ALL_USER_PLAYERS:
    //   return {
    //     ...state, 
    //     userPlayers: [...action.payload],
    //     firstCallPlayers: [...action.payload],
    //   }

    case GET_ALL_PLAYERS: 
      return {
        ...state, 
        players: [...action.payload],
        firstCallPlayers: [...action.payload],
        filterActivePlayers: [...action.payload],
        filterRetiredPlayers: [...action.payload],
      }

    case ALL_PLAYERS:
        return {
            ...state,
            players: [...state.firstCallPlayers]
        }

    case ACTIVE_PLAYERS:
      
        const filtered = state.filterActivePlayers.filter(function(player) {

                let date = new Date(player.finalGame);
    
                let getDate = date.getFullYear();
    
                return getDate === 2019;
        })
    
        return {
            ...state,
            players: filtered
        }  
    
    case RETIRED_PLAYERS:
        
        const filtered2 = state.filterRetiredPlayers.filter(function(player) {

            let date = new Date(player.finalGame);

            let getDate = date.getFullYear();

            return getDate !== 2019;
        })

        return {
            ...state,
            players: filtered2
        }
        
    default:
      return state;
  }
}