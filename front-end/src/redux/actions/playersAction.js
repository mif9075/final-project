import { 
    GET_ALL_PLAYERS, 
    GET_ALL_USER_PLAYERS, 
    ERROR_GET_PLAYER,
    ALL_PLAYERS,
    ACTIVE_PLAYERS,
    RETIRED_PLAYERS
} from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';

export const getAllPlayers = () => async dispatch => {

    try {
  
      let success = await Axios.get('/players/get-all-players')
    //   console.log(success)
  
      dispatch({
        type: GET_ALL_PLAYERS,
        payload: success.data
      })
    //   console.log(success.data)
      return Promise.resolve(success.data)
    } catch (error) {
      console.log(error)
      dispatch(errorGetPlayer(error))
      return Promise.reject(error);
    }
  
  }

export const getAllUserPlayers = (id) => async dispatch => {

  try {

    let foundAllUserPlayers = await Axios.get(`/player/get-all-user-players/${id}`)
  
    dispatch({
      type: GET_ALL_USER_PLAYERS,
      payload: foundAllUserPlayers.data
    })

    return Promise.resolve(foundAllUserPlayers.data);

  } catch (error) {
    console.log(error)
    dispatch(errorGetPlayer(error))
    return Promise.reject(error);
  }
}

export const getAllPlayersNow = () => dispatch => {
    dispatch({
        type: ALL_PLAYERS
    })
}

export const getAllActivePlayers = () => dispatch => {
    dispatch({
        type: ACTIVE_PLAYERS
    })
}

export const getAllRetiredPLayers = () => dispatch => {
    dispatch({
        type: RETIRED_PLAYERS
    })
}

const errorGetPlayer = (message) => dispatch => {
    dispatch({
      type: ERROR_GET_PLAYER,
      payload: message
    })
  }