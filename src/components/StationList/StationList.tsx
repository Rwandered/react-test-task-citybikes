import React from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/reducers/rootReducer";
import {Network} from "../../redux/reduxTypes";
import Station from "../Station/Station";
import { CircularProgress } from "@material-ui/core";
import s from './StationList.module.scss';

const StationList = () => {

  const { stations, company } = useSelector<AppState, Network>( state => state.network)

  return (
    <div
      className={ cn(
        s.cityBikes__stationList,
        s.stationList
      )}
    >
      {
        company.length !== 0 ?
          <ul className={ s.cityList__stations}>
            {
              stations.length !== 0 ?
                stations.map( (station, index) => (
                  <Station
                    key={ index }
                    station={ station.name }
                  />
                )): <h2 className={s.cityBikes__stationList_noData}>This network doesn`t have some stations...</h2>
            }
          </ul> : <CircularProgress/>
      }
    </div>
  )
}

export default StationList