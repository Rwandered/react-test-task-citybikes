import React, {useEffect, useState} from 'react';
import cn from 'classnames'
import City from "../City/City";
import s from './CityList.module.scss';


const CityList = () => {

  const [networks, setNetworks] = useState<Array<object>>([])

  useEffect(  () => {
    ( async function getCityBikesCities() {
      const res = await fetch('https://api.citybik.es/v2/networks?fields=id,company')
      const cityBikesNetworks = await res.json()
      console.log('cityBikesNetworks: ', cityBikesNetworks.networks)
      setNetworks( cityBikesNetworks.networks )
    })()
  }, [])


  return (
    <div
      className={ cn(
        s.cityBikes__cityList,
        s.cityList
      )}
    >
      <div className={s.cityList__row}>
        <ul className={ s.cityList__cities}>
          {
            networks.map( (network:any, index: number) => (
              <City
                key={ index }
                network={network}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CityList