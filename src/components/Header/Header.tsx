import React from 'react';
import {useSelector} from "react-redux";
import {Network} from "../../redux/reduxTypes";
import {AppState} from "../../redux/reducers/rootReducer";
import { CircularProgress } from '@material-ui/core';
import s from './Header.module.scss'


const Header = () => {

  const { company, stations, location } = useSelector<AppState, Network>( state => state.network)

  return (
    <div className={s.header__wrapper}>
      {
        company.length !== 0 ?
          <>
            <div className={s.header__title}>
              <h1>{ `${company.toString()} - ${location?.city} - ${location?.country}` }</h1>
            </div>
            <p>{ `Количество станций - ${stations.length}`}</p>
          </> : <CircularProgress/>
      }
    </div>
  )
}

export default Header