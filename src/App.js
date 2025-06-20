import React, { useState, useEffect } from "react";

import AppHeader from './Header/Header';
import TimerHolder from './ContentHolders/TimerHolder/TimerHolder';
import MoneyHolder from './ContentHolders/MoneyHolder/MoneyHolder';
import AchievementHolder from './ContentHolders/AchievementHolder/AchievementHolder';

export default function App() {

  const [NameValue, SetNameValue] = useState(localStorage.getItem('NameValue') || "");
  const [DateValue, SetDateValue] = useState(localStorage.getItem('DateValue') || "");
  const [PriceValue, SetPriceValue] = useState(localStorage.getItem('PriceValue') || "");
  const [UnitValue, SetUnitValue] = useState(localStorage.getItem('UnitValue') || "");

  useEffect(() => { localStorage.setItem('NameValue', NameValue); }, [NameValue]);
  useEffect(() => { localStorage.setItem('DateValue', DateValue); }, [DateValue]);
  useEffect(() => { localStorage.setItem('PriceValue', PriceValue); }, [PriceValue]);
  useEffect(() => { localStorage.setItem('UnitValue', UnitValue); }, [UnitValue]);

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