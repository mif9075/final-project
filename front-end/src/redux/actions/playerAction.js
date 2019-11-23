import {GET_PLAYER_BY_ID, ERROR_GET_PLAYER} from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';

export const getPlayerByID = (id) => async dispatch => {

    try {
        // console.log(id)
      let foundPlayer = await Axios.get(`/player/get-player-by-id/${id}`)
  
      dispatch({
        type: GET_PLAYER_BY_ID,
        payload: foundPlayer.data
      });
  
      return Promise.resolve(foundPlayer.data)
  
    } catch (error) {
      dispatch(errorGetPlayer(error));
      return Promise.reject(error);
    }
  
  }

  const errorGetPlayer = (message) => dispatch => {
    dispatch({
      type: ERROR_GET_PLAYER,
      payload: message
    })
  }