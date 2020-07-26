import {SET_NETWORK} from "./actions/actionTypes";

//Store
type stations = {
  name: string
}

export type Network =  {
  company: Array<string>,
  location?: {
    city?: string,
    country?: string
  },
  stations: Array<stations>
}

//Actions
// typeof в ts жестко определит значени е которое может быть
export interface ISetStationsAction {
  type: typeof SET_NETWORK,
  payload: Network,
}

// пока тут только один интерфейс, но будут еще
// создадим тип объединения

export type NetworkActionType = ISetStationsAction
