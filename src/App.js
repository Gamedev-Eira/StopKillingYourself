//Main app file - calls all other components and holds key values

import React, { useState } from "react"; //Uses React States - states are used for components that need to be re-rendered, as state updates trigger re-renders
import Cookies from 'js-cookie'; //Uses JS-Cookie to use cookies - cookies are used to save some of the values entered by the user

//Imports the 4 "container" compondents - these are self-contained elements of the app that displays (or gathers) certain information
import AppHeader from './Header/Header';
import TimerHolder from './ContentHolders/TimerHolder/TimerHolder';
import MoneyHolder from './ContentHolders/MoneyHolder/MoneyHolder';
import AchievementHolder from './ContentHolders/AchievementHolder/AchievementHolder';

//Default App function that is called
export default function App() {

  //Initalising states and functions to update these states for the 4 pieces of data the app gathers and renders
  const [NameValue, SetNameValue] = useState("");
  const [DateValue, SetDateValue] = useState("");
  const [PriceValue, SetPriceValue] = useState("");
  const [UnitValue, SetUnitValue] = useState("");

  return (  //Return box returns the HTML that will be displayed on page

    <div> {/*Everything wrapped in a div - probably not needed but felt correct*/}

      {/*Calls the header for the app, and passes the state values and their functions to it, so they can be used within the header*/}
      <AppHeader  
      
      NameValue = {NameValue} SetNameValue = {SetNameValue} 
      DateValue = {DateValue} SetDateValue = {SetDateValue}
      UnitsValue = {UnitValue} SetUnitValue = {SetUnitValue}
      PriceValue = {PriceValue} SetPriceValue = {SetPriceValue}

      />
      
      {/*Other app elements are called here*/}
      {/*They recieve the values of the data stored in cookies, and then use those as props rather than accessing the cookies themselves*/}
      {/*This was done for data integrity, but also so the functions could preform their own data validation on the data they recieve a bit easier*/}
      {/*This is also a hold-over from before cookies were implemented - didn't want to re-implement input validation*/}
      <TimerHolder LastUse={Cookies.get('Date')}/>
      <MoneyHolder CostPerUnit={Cookies.get('Price')} UnitsPerWeek={Cookies.get('Unit')} LastUse={Cookies.get('Date')}/>
      <AchievementHolder CostPerUnit={Cookies.get('Price')} UnitsPerWeek={Cookies.get('Unit')} LastUse={Cookies.get('Date')}/>

    </div> //end div wrapper

  );//end return
  
}//end default app function