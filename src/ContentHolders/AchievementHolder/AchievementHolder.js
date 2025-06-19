import React from 'react'
import './AchievementHolder.css'
import Achievement from '../../Classes/Achievements/Achievements';

export default function AchievementHolder(props) {

    var StartingAchievement = new Achievement(
        {Title : "Download the app",
        Tagline : "You started your quitting journey!",
        DefaultMessage : "Default",
        AchievementCondition : 0,
        AchievementType : "Other",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    var FirstDayAchievement = new Achievement(
        {Title : "Go 24hrs without tobacco",
        Tagline : "Only gets easier from here!",
        DefaultMessage : "Default",
        AchievementCondition : 1,
        AchievementType : "Timer",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    var CoffeeAchievement = new Achievement(
        {Title : "Save £3.50",
        Tagline : "You saved enough for a coffee - go treat yourself!",
        DefaultMessage : "Default",
        AchievementCondition : 3.5,
        AchievementType : "Money",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    var FirstWeekAchievement = new Achievement(
        {Title : "Go 1 week without tobacco",
        Tagline : "Halfway through the test period!",
        DefaultMessage : "Default",
        AchievementCondition : 7,
        AchievementType : "Timer",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    var SecondWeekAchievement = new Achievement(
        {Title : "Go 2 weeks without tobacco",
        Tagline : "Thank you for helping me test - you've done great!",
        DefaultMessage : "Default",
        AchievementCondition : 14,
        AchievementType : "Timer",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    var AverageSpendAchievement = new Achievement(
        {Title : "Save £100",
        Tagline : "Think of all the things you can buy!",
        DefaultMessage : "Default",
        AchievementCondition : 100,
        AchievementType : "Money",
        Cost : props.CostPerUnit, Units : props.UnitsPerWeek, Last : props.LastUse }
    )

    return (
        
        <div>
            
            <div className='AchievementContentHolderTitle'>
                
                <h1>Achievements:</h1>  
                <h3>Track your progress:</h3>
            </div>
            <div className='AchievementContentHolderBox'> <ul class="UnachievedList">
                <h3>
                <li><b>{StartingAchievement.ReturnTitle()}</b> | {StartingAchievement.ReturnTagline()}</li>
                <li><b>{FirstDayAchievement.ReturnTitle()}</b> | {FirstDayAchievement.ReturnTagline()}</li>
                <li><b>{CoffeeAchievement.ReturnTitle()}</b> | {CoffeeAchievement.ReturnTagline()}</li>
                <li><b>{FirstWeekAchievement.ReturnTitle()}</b> | {FirstWeekAchievement.ReturnTagline()}</li>
                <li><b>{AverageSpendAchievement.ReturnTitle()}</b> | {AverageSpendAchievement.ReturnTagline()}</li>
                <li><b>{SecondWeekAchievement.ReturnTitle()}</b> | {SecondWeekAchievement.ReturnTagline()}</li>
                </h3>
                </ul> </div>
        </div>
        
    );
    
  }