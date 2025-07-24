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

                {UserScoreboardEntry.DisplayName()} | {UserScoreboardEntry.DisplayTime()} | {UserScoreboardEntry.DisplayMoney()}

            </div>

        </div>
        
    );
    
  }