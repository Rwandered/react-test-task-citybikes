import React, {FC, useEffect, useState} from 'react';
import cn from 'classnames'
import City from "../City/City";
import s from './CityList.module.scss';

interface INetwork {
  company: string[],
  id: string,
  location: {
    city: string,
    country: string,
    [propName: string]: any
  }
}


const CityList = () => {

  const [networks, setNetworks] = useState<INetwork[]>([])

  const getCityBikesCities = async () => {
    const res = await fetch('https://api.citybik.es/v2/networks?fields=id,company,location')
    const { networks } = await res.json()
    const newNet = networks.filter( (elem:object, index:any) => index < 15)
    setNetworks( newNet )
    // console.log('cityBikesNetworks: ', networks)
    console.log('newNet: ', newNet)
  }


  useEffect(  () => {
    getCityBikesCities()
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
            networks.length !== 0 ?
              networks
            .map( (network,index) => (
               <City
                key={index}
                location={ network.location }
                index={index}
                stationId={ network.id }
              />
            ))
            : 'Loading...'
          }
        </ul>
      </div>
    </div>
  )
}

export default CityList
