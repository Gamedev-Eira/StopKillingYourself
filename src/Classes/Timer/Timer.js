import React, { Component } from 'react';

//timer is a class, uses reacts Component class as a parent
class TobaccoTimer extends Component {
  
  //constructor of TobaccoTimer
  constructor(props) {

    //Calls the constructor of the parent Component class
    super(props);

    //Class state stores TimeSince, which stores how long it has been since the user last reported using nicoteine
    //It's value is updated & initalised by calling CalculateTimeSince
    this.state = { TimeSince: this.CalculateTimeSince() };
    
  }

  componentDidMount() {

    this.interval = setInterval(() => {

      this.setState({ TimeSince: this.CalculateTimeSince() });

    }, 300); // Sets update time - unsure exactly how long this is, but felt like a good responsive time frame

  }

  //Function called in constructor, and then every 30 seconds to cause an update to the timer
  CalculateTimeSince() {

    const CurrentTime = new Date();

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
    
    const days = Math.floor(this.TimeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((this.TimeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes};
  }

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