import React from 'react'
import './Header.css'
import Icon from '../Assets/Default_Icon.png'
import Cookies from 'js-cookie'

export default function AppHeader({NameValue, SetNameValue, DateValue, SetDateValue, UnitValue, SetUnitValue, PriceValue, SetPriceValue}) {

    const HandleNameChange = (event) => { 

      Cookies.set('Name', 'PeePeePooPoo')
      SetNameValue( Cookies.get('Name') ); }

    const HandleDateChange = (event) => { 
      
      SetDateValue(event.target.value); }

    const HandleUnitChange = (event) => { 
      
      SetUnitValue(event.target.value);}

    const HandlePriceChange = (event) => { 

      SetPriceValue(event.target.value);}

    return (
    <div className='Header'>

      <img className="icon" src={Icon} alt="Icon"/>

      <div className="text">

        <label htmlFor="string-input">What's your name?: </label>
        <input type="text"
        id="string-input"

        value={Cookies.get('Name')}
        onChange={HandleNameChange}
        
        placeholder={Cookies.get('Name')}/>

        <label htmlFor="datetime">When did you quit? </label>
        <input type="datetime-local"
        id="datetime"
        value={DateValue}
        onChange={HandleDateChange}/>

        <label htmlFor="float-input">Weekly units (ex: vapes, tobacco pouches): </label>
        <input type="text" 
        id="float-input"
        value={UnitValue}
        onChange={HandleUnitChange}
        placeholder="0.0"/>

        <label htmlFor="float-input">Cost per unit: </label>
        <input type="text" 
        id="float-input"
        value={PriceValue}
        onChange={HandlePriceChange}
        placeholder="0.0"/>


      </div>

    </div>
    );
  }