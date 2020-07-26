import React, {useState} from 'react';
import cn from 'classnames';
import s from  './Station.module.scss';

type Station = {
  station: string
}

const Station = ( { station }:Station ) => {

  const [isLiked, setLiked] = useState(false)

  const handleLikeStation = ():void => {
    setLiked(!isLiked)
  }

  return (
    <li
      className={ s.cityBikes__station }
    >
      <span className={s.cityBikes__station_name}>
        { station }
      </span>
      <div
        className={cn (s.cityBikes__station_like, { [s.cityBikes__station_liked]: isLiked} ) }
        onClick={ handleLikeStation }
      >
        <svg viewBox="0 0 24 24">
            <path
              d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z">
            </path>
        </svg>
      </div>
    </li>
)
}

export default Station