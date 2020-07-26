import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import s from  './City.module.scss';
import {useDispatch} from "react-redux";
import {getStation, setNetwork} from "../../redux/actions/actionCreator";

interface ICityType {
  index?: number,
  location: {
    city: string,
    country: string,
    [propName: string]: any
  },
  stationId: string
}

const City = ( { location, index, stationId }:ICityType ) => {

  const dispatch = useDispatch()

  const { city, country } = location
  const initState = index === 0
  const [isActive, setActive] = useState( false  )

  useEffect(() => {
    initState && dispatch(getStation( stationId ))
  }, [])

  const handleGetStation = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation()

    if(isActive) {
      // отправить диспатч на обнуление списка
      dispatch( setNetwork({company: [], stations: []}) )
      dispatch(getStation( stationId ))
    }
  }

  const handleChangeActive = (event: React.FocusEvent) => {
    event.stopPropagation()
    setActive(!isActive)
  }

  return (
    <li
      className={ cn( s.cityBikes__city, {  [s.cityBikes__city_active]:  isActive } ) }
      tabIndex={0}
      onClick={ handleGetStation }
      onFocus={ handleChangeActive }
      onBlur={ handleChangeActive }
    >
      {  `${city}: ${country}`  }
    </li>
  )
}

export default City