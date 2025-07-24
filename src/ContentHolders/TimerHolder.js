import '../App.css' //Imports CSS
import TobaccoTimer from '../Classes/Timer';

export default function TimerHolder(props) {
    
    const DateVal = props.LastUse;

    return (
        
        <div>
            
            <div className='TimerContentHolderTitle'>
                
                <h1>Time since last smoke:</h1>  
                <h3>You have been tobacco-free for:</h3>
                
            </div>

            <div className='TimerContentHolderBox'>

                <h2><TobaccoTimer TimeOfLastUse={DateVal} /></h2>
            
            </div>

        </div>
    );
    
  }