import './Header.css' //Imports it's CSS
import Icon from '../Assets/Default_Icon.png' //Uses the apps logo, so imports it from the Assets folder
import Cookies from 'js-cookie' //Reads and writes the value of the apps cookies, so imports the library

//Default AppHeader function - gets the 4 state functions as arguments so that it can use them
export default function AppHeader({SetNameValue, SetDateValue, SetUnitValue, SetPriceValue}) {

    //"Handle___Change functions handles changes within the input fields
    //Each of them get the current value of their respective field (through event.target.value) and sets it to the corresponding cookie
    //The newly-set value of this cookie is then given to the state function to trigger updates elsewhere

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

    return ( //Returns the HTML of the header
      
    <div className='Header'> {/*Everything wrapped in a div with the Header class*/}

      {/*Image of the app is rendered here*/}      
      <img className="icon" src={Icon} alt="Icon"/>

      {/*Rest of the contents here are rendered in the text field*/}
      <div className="text">

        {/*Labels are used to input data in the header*/}
        {/*All have an input type(dictating the data that'll be entered) - the datetime uses a HTML calander to select the date*/}
        {/*The value is derived from the corresponding cookie, and calls the corresponding Handle__Change function when it's value is changed*/}

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

      </div> {/*End text div*/}

    {/*End header div*/}
    </div>

  ); //end return

} //end default header function