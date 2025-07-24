//Main app file - calls all other components and holds key values

import React, { useState } from "react"; //Uses React States - states are used for components that need to be re-rendered, as state updates trigger re-renders

//Imports the 4 "container" compondents - these are self-contained elements of the app that displays (or gathers) certain information
import AppHeader from './Header/Header';
import TimerHolder from './ContentHolders/TimerHolder';
import MoneyHolder from './ContentHolders/MoneyHolder';
import AchievementHolder from './ContentHolders/AchievementHolder';
import ScoreboardHolder from "./ContentHolders/ScoreboardHolder";

//Default App function that is called
export default function App() {

  //Initalising states and functions to update these states for the 4 pieces of data the app gathers and renders
  const [NameValue, SetNameValue] = useState("");
  const [DateValue, SetDateValue] = useState("");
  const [PriceValue, SetPriceValue] = useState("");
  const [UnitValue, SetUnitValue] = useState("");

  return (  //Return box returns the HTML that will be displayed on page

    <div> {/*Everything wrapped in a div - probably not needed but felt correct*/}

      {/*Calls the header for the app, and passes the state functions to it, so they can be used within the header*/}
      <AppHeader SetNameValue = {SetNameValue} SetDateValue = {SetDateValue} SetUnitValue = {SetUnitValue} SetPriceValue = {SetPriceValue}/>
      
      {/*Other app elements are called here*/}
      {/*They recieve the values of the data stored in the state, and then use those as props rather than accessing the state or cookies themselves*/}
      {/*This was done for data integrity, but also so the functions could preform their own data validation on the data they recieve a bit easier*/}
      {/*This is also a hold-over from before cookies were implemented - didn't want to re-implement input validation*/}
    
      <TimerHolder LastUse={DateValue}/>
      <MoneyHolder CostPerUnit={PriceValue} UnitsPerWeek={UnitValue} LastUse={DateValue}/>
      <AchievementHolder CostPerUnit={PriceValue} UnitsPerWeek={UnitValue} LastUse={DateValue}/>
      <ScoreboardHolder/>

    </div> //end div wrapper

  );//end return
  
}//end default app function
