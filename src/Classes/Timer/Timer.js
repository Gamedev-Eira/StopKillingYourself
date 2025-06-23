import React, { Component } from 'react';

class TobaccoTimer extends Component {
  
  constructor(props) {

    super(props);

    this.state = { TimeSince: this.CalculateTimeSince() };
    
  }

  componentDidMount() {

    this.interval = setInterval(() => {

      this.setState({ TimeSince: this.CalculateTimeSince() });

    }, 300);

  }

  CalculateTimeSince() {

    const CurrentTime = new Date();

    if(!this.props.TimeOfLastUse){
      this.LastUseTimeObject = CurrentTime;
    }
    else {
      this.LastUseTimeObject = new Date(this.props.TimeOfLastUse);
    }

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