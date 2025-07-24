import '../../App.css' //Imports CSS

export default function ScoreboardHolder(props) {


    //return HTML elements
    return (
        
        <div> {/*Everything wrapped in a div*/}
            
            {/*Content holder split into two boxes - one that holds the title and sub-title, and one that holds everything else*/}
            {/*This one holds the title*/}
            <div className='ScoreboardContentHolderTitle'>
                
                <h1>Scoreboard:</h1>  
                <h3>See how you compare:</h3>
                
            </div>
            
            {/*This div holds the achievement text itself*/}
            <div className='ScoreboardContentHolderBox'>

                PeePeePooPoo 

            </div>

        </div>
        
    );
    
  }