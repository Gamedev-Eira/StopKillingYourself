import React, { Component } from 'react';

//timer is a class, uses reacts Component class as a parent
class Scoreboard extends Component {
  
    //constructor of Scoreboard
    constructor(props) {

        //Calls the constructor of the parent Component class
        super(props);
        
        this.state = { TimeSince: this.CalculateTimeSince() };
    
    }

    //Main function of the component
    componentDidMount() {

        //Interval runs repeatedly
        this.interval = setInterval(() => {

            //do stuffs

        }, 300); // Sets update time to once every 30 seconds

    }

    //Render function displays the scoreboard entry
    render() {

        return (
            <div>PeePeePooPoo</div>
        );

    }

}

export default Scoreboard;