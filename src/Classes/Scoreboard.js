import React, { Component } from 'react';
import BaseClass from './BaseClass';

//timer is a class, uses reacts Component class as a parent
class Scoreboard extends BaseClass {
  
    //constructor of Scoreboard
    constructor(props) {

        //Calls the constructor of the parent Component class
        super(props);

        this.state = {MillesecondsSince: super.CalculateTimeSince(this.props.TimeOfLastUse)};
        this.state = {MoneySaved: super.CalculateMoneySaved(this.props.MoneySaved)};
    
    }

    //Main function of the component
    componentDidMount() {

        //Interval runs repeatedly
        this.interval = setInterval(() => {

            //calls CalculateTimeSince, and puts the value of this into TimeSince, which is saved within the state
            this.setState( {MillesecondsSince: super.CalculateTimeSince(this.props.TimeOfLastUse)} );
            this.setState( {MoneySaved: super.CalculateMoneySaved(this.props.MoneySaved)} )

        }, 300); // Sets update time to once every 30 seconds

  }

    //Returns the name to be displayed by the Scoreboard holder
    //The DisplayedName is by default set to INSERT NAME
    //If the name in props isn't a null value, DisplayedName is replaced with the name value in props
    //This is then returned to the user
    DisplayName(){
        var DisplayedName = "INSERT NAME"

        if(!this.props.Name == false) { DisplayedName = this.props.Name}

        return (DisplayedName);
    }

    //Displays the time in days, hours, and minutes
    DisplayTime() {
        const { days, hours, minutes } = super.CalculateDaysHoursMinutes(this.props.TimeOfLastUse);
        var ConjounedString = days + " Day(s), " + hours + " Hour(s), " + minutes + " Minute(s)";

        return ( ConjounedString );
    }

    //Displays the money saved by the user
    DisplayMoney() {
        return ( "£" + super.CalculateMoneySaved(this.props.TimeOfLastUse, this.props.CostPerDay) )
    }

    //Returns the actual value of MillesecondsSince for calculations
    ReturnMillesecondsSinceLastUse() {
        return(this.state.MillesecondsSince);
    }

    //Returns the actual value of MoneySaved for calculations
    ReturnMoneySaved() {
        return(this.state.MoneySaved);
    }

}

export default Scoreboard;
