import React, {useEffect, useState} from 'react';
import cn from 'classnames'
import CityList from "./components/CityList/CityList";


const App = () => {


  console.log('App')
  return (
    <div className={ cn('cityBikes', 'cityBikes__wrapper')}>
      <CityList/>
    </div>
  );
}

export default App;
