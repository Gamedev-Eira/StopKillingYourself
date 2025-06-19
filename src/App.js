import React, { useState } from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';

import AppHeader from './Header/Header';
import TimerHolder from './ContentHolders/TimerHolder/TimerHolder';
import MoneyHolder from './ContentHolders/MoneyHolder/MoneyHolder';
import AchievementHolder from './ContentHolders/AchievementHolder/AchievementHolder';

export default function App() {

  const [NameValue, SetNameValue] = useState("");
  const [DateValue, SetDateValue] = useState("");
  const [PriceValue, SetPriceValue] = useState("");
  const [UnitValue, SetUnitValue] = useState("");

  return (

    <div>

      <AppHeader
      
      NameValue = {NameValue} SetNameValue = {SetNameValue} 
      DateValue = {DateValue} SetDateValue = {SetDateValue}
      UnitsValue = {UnitValue} SetUnitValue = {SetUnitValue}
      PriceValue = {PriceValue} SetPriceValue = {SetPriceValue}

      />
      
      <TimerHolder LastUse={DateValue}/>
      <MoneyHolder CostPerUnit={PriceValue} UnitsPerWeek={UnitValue} LastUse={DateValue}/>
      <AchievementHolder CostPerUnit={PriceValue} UnitsPerWeek={UnitValue} LastUse={DateValue}/>

    </div>

  );
}