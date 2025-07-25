import "../App.css" //Import CSS
import Achievement from '../Classes/Achievements';

//AchievementHolder is responsible both for being the container that holds the achievements, and is where the achievments are created
export default function AchievementHolder(props) {

    //Finds the daily cost by multiplying the cost per unit with the units per week
    //This finds the cost per week, which is divided by 7 to find the cost per day
    var DailyCost = ((props.CostPerUnit * props.UnitsPerWeek) / 7)

    //List of achievements being initialised
    const AchievementList = [
    { Title: "Use this app for the first time",
    Tagline: "You started your quitting journey!",
    DefaultMessage: "Default",
    AchievementCondition: 0,
    AchievementType: "Other",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },
    
    { Title: "Go 24hrs without tobacco",
    Tagline: "Only gets easier from here!",
    DefaultMessage: "Default",
    AchievementCondition: 1,
    AchievementType: "Timer",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },

    { Title: "Save £3.50",
    Tagline: "You saved enough for a coffee - go treat yourself!",
    DefaultMessage: "Default",
    AchievementCondition: 3.5,
    AchievementType: "Money",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },
    
    { Title: "Go 1 week without tobacco",
    Tagline: "Halfway through the test period!",
    DefaultMessage: "Default",
    AchievementCondition: 7,
    AchievementType: "Timer",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },
    
    { Title: "Go 2 weeks without tobacco",
    Tagline: "Thank you for helping me test - you've done great!",
    DefaultMessage: "Default",
    AchievementCondition: 14,
    AchievementType: "Timer",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },

    { Title: "Save £100",
    Tagline: "Think of all the things you can buy!",
    DefaultMessage: "Default",
    AchievementCondition: 100,
    AchievementType: "Money",
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse } ];

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
            <div className='AchievementContentHolderBox'> <ul className="List">

                <h3> {/*Achievements are displayed as h3s - this loop is wrapped in an unordered list, with each output being a list entry
                Loop goes through each achievement and calls them, which allows them to render*/}
                    {AchievementList.map((CurrentAchievement, index) => ( <Achievement key={index} {...CurrentAchievement} />) ) }
                </h3>
                
            </ul></div>

        </div>
        
    );
    
  }