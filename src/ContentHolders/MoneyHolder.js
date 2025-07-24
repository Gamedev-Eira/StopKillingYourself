import '../App.css' //Imports CSS
import MoneyTracker from '../Classes/Money'

//Default MoneyHolder function - recieves it's arguments via props
export default function MoneyHolder(props) {
    
    return (
        
        <div> 
            
            <div className='MoneyContentHolderTitle'>
                
                <h1>Money Saved:</h1>
                <h3>You have saved roughly:</h3>
                
            </div>

            <div className='MoneyContentHolderBox'>
                
                <h2>

                    <MoneyTracker
                    CostPerDay = {(props.UnitsPerWeek * props.CostPerUnit) / 7}
                    TimeOfLastUse = {props.LastUse}/> 
                </h2>
            
            </div>
        </div>

    );
  }