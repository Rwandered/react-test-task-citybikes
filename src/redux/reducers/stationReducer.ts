import {SET_NETWORK} from "../actions/actionTypes";
import {ISetStationsAction, Network} from "../reduxTypes";

const initialState: Network = {
  company: [],
  location: {
    city: '',
    country: ''
  },
  stations: []
}

export const stationReducer = (state = initialState, action: ISetStationsAction ) => {
  const { type, payload } = action
  switch (type) {
    case SET_NETWORK: {
      return { ...state, ...payload  }
    }
    default: return state
  }
}