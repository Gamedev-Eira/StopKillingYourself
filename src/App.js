import React, { useState } from "react";
import Cookies from 'js-cookie';

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
      
      <TimerHolder LastUse={Cookies.get('Date')}/>
      <MoneyHolder CostPerUnit={Cookies.get('Price')} UnitsPerWeek={Cookies.get('Unit')} LastUse={Cookies.get('Date')}/>
      <AchievementHolder CostPerUnit={Cookies.get('Price')} UnitsPerWeek={Cookies.get('Unit')} LastUse={Cookies.get('Date')}/>

    </div>

  );
}