import {SET_STATIONS} from "../actions/actionTypes";
import {ISetStationsAction, Stations} from "../reduxTypes";

const initialState: Stations = {
  stations: []
}

export const stationReducer = (state = initialState, action: ISetStationsAction ) => {
  const { type, payload } = action

  switch (type) {
    case SET_STATIONS: {
      return {
        ...state,
        stations: payload.stations
      }
    }
    default: return state
  }
}