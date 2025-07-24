import React, { Component } from 'react';

//timer is a class, uses reacts Component class as a parent
class BaseClass extends Component {
  
    //constructor of BaseClass
    constructor(props) {

    //Calls the constructor of the parent Component class
    super(props);
    
  }

    //Function calculates the time since the user used nicotine in milleseconds
    CalculateTimeSince() {

        //Gets the current time by creating a new instance of the date class, as this defaults to the current date and time when no argument is given
        const CurrentTime = new Date();

        //A new date class object is created here, which is used in calculations bellow
        //If-Else at the start of the function checks whether TimeOfLastUse is a null value
        //If it is, this new date class is set to match the CurrentTime date set above
        //This will cause any calculations this function produces to return a time difference of 0
        //Otherwise, this new date class is created using the time passed to the function in TimeOfLastUse

        if(!this.props.TimeOfLastUse) {
            var LastUseTimeObject = CurrentTime;
        } else {
            var LastUseTimeObject = new Date(this.props.TimeOfLastUse);
        }

        //Time difference stores the difference between the current time and the time the user last used nicotine
        //Calling Date() w/o an argument creates a Date object for the current time
        //This can then have the value of LastUseTimeObject subtracted from it to find the difference in milleseconds
        //This value is then returned
        return (CurrentTime - LastUseTimeObject);

    }

    //Function calculates how much money the user has saved
    CalculateMoneySaved() {

        //First checks the props it recieved - does multiple checks on the data to make sure it is valid

        var CostInvalid = (!this.props.CostPerDay || isNaN(this.props.CostPerDay));
        var DateInvalid = (!this.props.TimeOfLastUse);

        if(CostInvalid || DateInvalid) {
        return 0.00; //If the data recieved is invalid, it returns 0
        }

        //Else runs if the CostPerDay and TimeOfLastUse are valid values
        else {

            var MilesecondsSinceLastUse = this.CalculateTimeSince(this.props.TimeOfLastUse)

            //To work out the amount of money saved per millisecond, the cost of smoking per day is divided by the amount of miliseconds in a day
            var MoneySavedPerMillisecond = this.props.CostPerDay / 86400000

            //The total saved is then found by multiplying the money saved per millisecond and the milliseconds since the user last used nicoteine
            var TotalSaved = MoneySavedPerMillisecond * MilesecondsSinceLastUse
      
            //This value is then returned, after rounding to 2 decimal places
            return TotalSaved.toFixed(2);

        }    
    }

    //Returns the time difference between the current date and the date the user last consumed nicoteine
    //in days, hours, and minutes 
    CalculateDaysHoursMinutes(){

        var MillesecondsSinceLastUse = this.CalculateTimeSince(this.props.TimeOfLastUse);

        if (!MillesecondsSinceLastUse || isNaN(MillesecondsSinceLastUse)) {
            var days = 0;
            var hours = 0;
            var minutes = 0;
        }

        else {
            //Runs maths to convert the milliseconds between the two times to days, hours, and minutes
            var days = Math.floor(MillesecondsSinceLastUse / (1000 * 60 * 60 * 24));
            var hours = Math.floor((MillesecondsSinceLastUse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((MillesecondsSinceLastUse % (1000 * 60 * 60)) / (1000 * 60));
        }

        //These values are then returned
        return { days, hours, minutes };

  }

}

export default BaseClass;