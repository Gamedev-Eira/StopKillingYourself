import React from 'react'
import './TimerHolder.css'
import '../../Classes/Timer/Timer'
import TobaccoTimer from '../../Classes/Timer/Timer';

export default function TimerHolder(props) {
    
    const DateVal = props.LastUse;
    //if(!props.LastUse){  }

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