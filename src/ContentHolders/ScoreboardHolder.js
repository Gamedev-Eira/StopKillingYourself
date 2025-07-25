import '../App.css' //Imports CSS
import Scoreboard from '../Classes/Scoreboard'

export default function ScoreboardHolder(props) {

    //Works out the daily cost of the users nicotine usage to pass to the Scoreboard Classes due to be created
    var DailyCost = ((props.CostPerUnit * props.UnitsPerWeek) / 7);

    //Creates a new Scoreboard class instance
    const ScoreboardList = [
    { Name: props.UserName,
    CostPerDay: DailyCost,
    TimeOfLastUse: props.LastUse },

    { Name: "Danny",
    CostPerDay: 0.23,
    TimeOfLastUse: "2025-07-24T08:13:42" },

    { Name: "Amy",
    CostPerDay: 0.18,
    TimeOfLastUse: "2025-07-13T19:47:28" } ];

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
            <div className='ScoreboardContentHolderBox'><ul className='List'>

                <h3> {ScoreboardList.map((CurrentEntry, index) => (<Scoreboard key={index} {...CurrentEntry} /> )) } </h3>

            </ul></div>

        </div>
        
    );
    
  }