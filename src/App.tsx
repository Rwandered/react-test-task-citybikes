import React from 'react';
import CityList from "./components/CityList/CityList";
import Header from "./components/Header/Header";
import StationList from "./components/StationList/StationList";
import s from './App.module.scss'


const App = () => {

  return (
    <div className={s.cityBikes}>
      <Header/>
      <div className={ s.cityBikes__wrapper }>
          <CityList/>
          <StationList/>
      </div>
    </div>
  );
}

export default App;
