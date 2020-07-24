import {GET_STATIONS, SET_STATIONS} from "./actionTypes";
import {NetworkActionType, Stations} from "../reduxTypes";


export const setStation = (stations: Stations): NetworkActionType => {
  return {
    type: SET_STATIONS,
    payload: stations
  }
}

export const getStation = (id: string) => {
  return async (dispatch:any) => {
    try {
      const res = await fetch(`https://api.citybik.es/v2/networks/${id}`)
      const { stations } = await res.json()
      dispatch( setStation(stations) )
    } catch (e) {

    }
  }
}

// export const getStation = (id:string): object => {
//   return  async (dispatch: any):Promise<any> => {
//     try {
//       const res = await fetch(`https://api.citybik.es/v2/networks/${id}`)
//       const { stations } = await res.json()
//       dispatch( setStation(stations) )
//     } catch (e) {}
//   }
// }