import { SET_STATIONS} from "./actions/actionTypes";

//Store
export type Stations = {
  stations: object[]
}

//Actions
// typeof в ts жестко определит значени е которое может быть
export interface ISetStationsAction {
  type: typeof SET_STATIONS,
  payload: Stations,
}

// пока тут только один интерфейс, но будут еще
// создадим тип объединения

export type NetworkActionType = ISetStationsAction
