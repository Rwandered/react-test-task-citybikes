import React, { useState } from 'react';
import cn from 'classnames';
import s from  './City.module.scss';

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



  const { city, country } = location

  const initState = index === 0
  const [isActive, setActive] = useState( initState  )

  const handleGetStation = (event: React.MouseEvent<HTMLLIElement>) => {

  }

  const handleChangeActive = (event: React.FocusEvent) => {
    setActive(!isActive)
  }

  return (
    <li
      className={ cn( s.cityBikes__city, {  [s.cityBikes__city_active]:  isActive} ) }
      tabIndex={0}
      // onClick={ handleGetStation }
      onFocus={ handleChangeActive }
      onBlur={ handleChangeActive }
    >
      {  `${city}: ${country}`  }
    </li>
  )
}

export default City