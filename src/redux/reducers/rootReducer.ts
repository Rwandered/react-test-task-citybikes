import {combineReducers} from "redux";
import {stationReducer} from "./stationReducer";


const rootReducer = combineReducers({
    network: stationReducer
  }
)

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>;