import { SET_NETWORK} from "./actionTypes";
import {NetworkActionType, Network} from "../reduxTypes";
import axios from '../../utils/api'


export const setNetwork = (network: Network): NetworkActionType => {
  return {
    type: SET_NETWORK,
    payload: network
  }
}

export const getStation = (id: string) => {

  return async (dispatch:any) => {
    try {
      const {data} = await axios.get(`/networks/${id}`)
      dispatch( setNetwork( data.network ) )
    } catch (e) {}
  }
}