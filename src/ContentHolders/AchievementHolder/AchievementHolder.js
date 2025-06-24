import './AchievementHolder.css'
import Achievement from '../../Classes/Achievements/Achievements';

//AchievementHolder is responsible both for being the container that holds the achievements, and is where the achievments are created
export default function AchievementHolder(props) {

    //List of achievements being initialised
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

    //return HTML elements
    return (
        
        <div> {/*Everything wrapped in a div*/}
            
            {/*Content holder split into two boxes - one that holds the title and sub-title, and one that holds everything else*/}
            {/*This one holds the title*/}
            <div className='AchievementContentHolderTitle'>
                
                <h1>Achievements:</h1>  
                <h3>Track your progress:</h3>
                
            </div>
            
            {/*This div holds the achievement text itself*/}
            <div className='AchievementContentHolderBox'> <ul class="List">

                <h3> {/*Achievements are displayed as h3s - displayed by calling ReturnTitle and ReturnTagline for each achievement*/}
                <li><b>{StartingAchievement.ReturnTitle()}</b> | {StartingAchievement.ReturnTagline()}</li>
                <li><b>{FirstDayAchievement.ReturnTitle()}</b> | {FirstDayAchievement.ReturnTagline()}</li>
                <li><b>{CoffeeAchievement.ReturnTitle()}</b> | {CoffeeAchievement.ReturnTagline()}</li>
                <li><b>{FirstWeekAchievement.ReturnTitle()}</b> | {FirstWeekAchievement.ReturnTagline()}</li>
                <li><b>{AverageSpendAchievement.ReturnTitle()}</b> | {AverageSpendAchievement.ReturnTagline()}</li>
                <li><b>{SecondWeekAchievement.ReturnTitle()}</b> | {SecondWeekAchievement.ReturnTagline()}</li>
                </h3>
                </ul> {/*Achievements also are stored in an unordered list because I thought it looked better*/}

            </div>

        </div>
        
    );
    
  }