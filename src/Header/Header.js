import './Header.css'
import Icon from '../Assets/Default_Icon.png'
import Cookies from 'js-cookie'

export default function AppHeader({SetNameValue, SetDateValue, SetUnitValue, SetPriceValue}) {

    const HandleNameChange = (event) => { 

      Cookies.set('Name', event.target.value)
      SetNameValue( Cookies.get('Name') ); }

    const HandleDateChange = (event) => { 
      
      Cookies.set('Date', event.target.value)
      SetDateValue(event.target.value); }

    const HandleUnitChange = (event) => { 
      
      Cookies.set('Unit', event.target.value)
      SetUnitValue(event.target.value);}

    const HandlePriceChange = (event) => { 

      Cookies.set('Price', event.target.value)
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
        placeholder="Name"/>

        <label htmlFor="datetime">When did you quit? </label>
        <input type="datetime-local"
        id="datetime"
        value={Cookies.get('Date')}
        onChange={HandleDateChange}/>

        <label htmlFor="float-input">Weekly units (ex: vapes, tobacco pouches): </label>
        <input type="text" 
        id="float-input"
        value={Cookies.get('Unit')}
        onChange={HandleUnitChange}
        placeholder="0.0"/>

        <label htmlFor="float-input">Cost per unit: </label>
        <input type="text" 
        id="float-input"
        value={Cookies.get('Price')}
        onChange={HandlePriceChange}
        placeholder="0.0"/>

      </div>

    </div>

  );
}