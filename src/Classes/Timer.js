import React, { Component } from 'react';
import BaseClass from './BaseClass';

//timer is a class, uses the BaseClass class as a parent
class TobaccoTimer extends BaseClass {
  
  //constructor of TobaccoTimer
  constructor(props) {

    //Calls the constructor of the parent class
    super(props);

    //Class state stores TimeSince, which stores how long it has been since the user last reported using nicoteine
    //It's value, as saved in the state, is updated & initalised by calling CalculateTimeSince
    this.state = { TimeSince: super.CalculateDaysHoursMinutes(this.props.TimeOfLastUse) };
    
  }

    //Main function of the component
  componentDidMount() {

    //Interval runs repeatedly
    this.interval = setInterval(() => {

      //calls CalculateTimeSince, and puts the value of this into TimeSince, which is saved within the state
      this.setState({ TimeSince: super.CalculateDaysHoursMinutes(this.props.TimeOfLastUse) });

    }, 300); // Sets update time to once every 30 seconds

  }

  //Render function gets the days, hours, and minutes from TimeSince in the state, then displays them in a human readable format
  render() {
    var { days, hours, minutes } = this.state.TimeSince;

    return (
      <div>
        {days} Day(s), {hours} Hour(s), {minutes} Minute(s)
      </div>
    );
  }
}

export default TobaccoTimer;