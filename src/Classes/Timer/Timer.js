import React, { Component } from 'react';

//timer is a class, uses reacts Component class as a parent
class TobaccoTimer extends Component {
  
  //constructor of TobaccoTimer
  constructor(props) {

    //Calls the constructor of the parent Component class
    super(props);

    //Class state stores TimeSince, which stores how long it has been since the user last reported using nicoteine
    //It's value, as saved in the state, is updated & initalised by calling CalculateTimeSince
    this.state = { TimeSince: this.CalculateTimeSince() };
    
  }

    //Main function of the component
  componentDidMount() {

    //Interval runs repeatedly
    this.interval = setInterval(() => {

      //calls CalculateTimeSince, and puts the value of this into TimeSince, which is saved within the state
      this.setState({ TimeSince: this.CalculateTimeSince() });

    }, 300); // Sets update time to once every 30 seconds

  }

  //Function calculates the time since the user used nicotine
  CalculateTimeSince() {

    //Gets the current time by creating a new instance of the date class, as this defaults to the current date and time when no argument is given
    const CurrentTime = new Date();

    //A new date class object is created here, which is used in calculations bellow
    //If-Else at the start of the function checks whether TimeOfLastUse is a null value
    //If it is, this new date class is set to match the CurrentTime date set above
    //This will cause any calculations this function produces to return a time difference of 0
    //Otherwise, this new date class is created using the time passed to the function in TimeOfLastUse

    if(!this.props.TimeOfLastUse){
      this.LastUseTimeObject = CurrentTime;
    }
    else {
      this.LastUseTimeObject = new Date(this.props.TimeOfLastUse);
    }

    //Time difference stores the difference between the current time and the time the user last used nicotine
    //Calling Date() w/o an argument creates a Date object for the current time
    //This can then have the value of LastUseTimeObject subtracted from it to find the TimeDifference
    this.TimeDifference = CurrentTime - this.LastUseTimeObject;
    
    //Runs maths to convert the milliseconds between the two times to days, hours, and minutes
    const days = Math.floor(this.TimeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((this.TimeDifference % (1000 * 60 * 60)) / (1000 * 60));

    //These values are then returned
    return { days, hours, minutes};
  }

  //Render function gets the days, hours, and minutes from TimeSince in the state, then displays them in a human readable format
  render() {
    const { days, hours, minutes } = this.state.TimeSince;

    return (
      <div>
        {days} Day(s), {hours} Hour(s), {minutes} Minute(s)
      </div>
    );
  }
}

export default TobaccoTimer;
