import React from 'react'
import './MoneyHolder.css'
import MoneyTracker from '../../Classes/Money/Money'

export default function MoneyHolder(props) {

    return (
        
        <div>
            
            <div className='MoneyContentHolderTitle'>
                
                <h1>Money Saved:</h1>
                <h3>You have saved roughly:</h3>
                
            </div>

            <div className='MoneyContentHolderBox'>
                
                <h2> <MoneyTracker

                //Cost of smoking per-day is calculated by calculating the weekly cost, then divding by 7
                CostPerDay = {(props.UnitsPerWeek * props.CostPerUnit) / 7}
                DateOfLastUse = {new Date(props.LastUse)}/> </h2>
            
            </div>

        </div>
    );
  }