import '../App.css' //Imports CSS
import Scoreboard from '../Classes/Scoreboard'

export default function ScoreboardHolder(props) {

    //Works out the daily cost of the users nicotine usage to pass to the Scoreboard Classes due to be created
    var DailyCost = ((props.CostPerUnit * props.UnitsPerWeek) / 7);

    //Creates a new Scoreboard class instance
    var UserScoreboardEntry = new Scoreboard(
        {Name : props.UserName,
        CostPerDay : DailyCost,
        TimeOfLastUse : props.LastUse}
    )

    var DannyScoreboardEntry = new Scoreboard(
        {Name : "Danny",
        CostPerDay : 0.23,
        TimeOfLastUse : "2025-07-24T08:13:42"}
    )

    var AmyScoreboardEntry = new Scoreboard(
        {Name : "Amy",
        CostPerDay : 0.18,
        TimeOfLastUse : "2025-07-13T19:47:28"}
    )

    //return HTML elements
    return (
        
        <div> {/*Everything wrapped in a div*/}
            
            {/*Content holder split into two boxes - one that holds the title and sub-title, and one that holds everything else*/}
            {/*This one holds the title*/}
            <div className='ScoreboardContentHolderTitle'>
                
                <h1>Scoreboard:</h1>  
                <h3>See how you compare:</h3>
                
            </div>
            
            {/*This div holds the scoreboard text itself*/}
            <div className='ScoreboardContentHolderBox'>

                <h3>{UserScoreboardEntry.DisplayName()} | {UserScoreboardEntry.DisplayTime()} | {UserScoreboardEntry.DisplayMoney()}</h3>

                <h3>{DannyScoreboardEntry.DisplayName()} | {DannyScoreboardEntry.DisplayTime()} | {DannyScoreboardEntry.DisplayMoney()}</h3>

                <h3>{AmyScoreboardEntry.DisplayName()} | {AmyScoreboardEntry.DisplayTime()} | {AmyScoreboardEntry.DisplayMoney()}</h3>

            </div>

        </div>
        
    );
    
  }