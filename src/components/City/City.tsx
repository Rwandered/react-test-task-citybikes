import React, { useState } from 'react';
import cn from 'classnames';
import s from  './City.module.scss';

type CityType = {
  network: {
    location: {
      city: string
    }
  }
}

const City = ( { network }: CityType ) => {

  const [isActive, setActive] = useState( false )

  const handleGetStation = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(!isActive)
  }

  return (
    <li
      className={ cn( { [s.cityBikes__city_active]:  isActive} ) }
      onClick={ handleGetStation }
    >
      { network.location.city }
    </li>
  )
}

export default City