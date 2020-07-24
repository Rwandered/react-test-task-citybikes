import {combineReducers} from "redux";
import {stationReducer} from "./stationReducer";


const rootReducer = combineReducers({
    stations: stationReducer
  }
)

export default rootReducer