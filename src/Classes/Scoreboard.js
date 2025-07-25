import React, { Component } from 'react';
import BaseClass from './BaseClass';

//timer is a class, uses reacts Component class as a parent
class Scoreboard extends BaseClass {
  
    //constructor of Scoreboard
    constructor(props) {

        //Calls the constructor of the parent Component class
        super(props);

        this.state = {  TimeSince: super.CalculateDaysHoursMinutes(this.props.TimeOfLastUse),
                        MoneySaved: super.CalculateMoneySaved(this.props.TimeOfLastUse, this.props.CostPerDay) };
    
    }

    //Main function of the component
    componentDidMount() {

        //Interval runs repeatedly
        this.interval = setInterval(() => {

            //calls CalculateTimeSince, and puts the value of this into TimeSince, which is saved within the state
            this.setState( {TimeSince: super.CalculateDaysHoursMinutes(this.props.TimeOfLastUse),
                            MoneySaved: super.CalculateMoneySaved(this.props.TimeOfLastUse, this.props.CostPerDay) } );

        }, 300); // Sets update time to once every 30 seconds

    }

    render () {

        return (

            <li>{this.ShowName()} | {this.ShowTime()} | {this.ShowMoney()}</li>

        )

    }

    //Returns the name to be displayed by the Scoreboard holder
    //The DisplayedName is by default set to INSERT NAME
    //If the name in props isn't a null value, DisplayedName is replaced with the name value in props
    //This is then returned to the user
    ShowName(){
        var DisplayedName = "INSERT NAME"

        if(!this.props.Name == false) { DisplayedName = this.props.Name}

        return (DisplayedName);
    }

    ShowTime () {
        const { days, hours, minutes } = this.state.TimeSince;

        var ConjounedString = days + " Day(s), " + hours + " Hour(s) ," + minutes + " Minute(s)";
        return ( ConjounedString );
    }

    ShowMoney () {
        return ( "£" + super.CalculateMoneySaved(this.props.TimeOfLastUse, this.props.CostPerDay) )
    }

}

export default Scoreboard;