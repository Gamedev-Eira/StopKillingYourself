import React, { Component } from 'react';

//Created as a child of the component class
class MoneyTracker extends Component {
  
  //This is the constructor for the class, which immedietly calls the contructor for Component
  //Props contains the arguments passed to the class
  constructor(props) { super(props);

    //Immedietely calls CalculateMoneySaved, and puts the value of this into MoneySaved, which is saved within the state
    this.state = { MoneySaved: this.CalculateMoneySaved() };

  }

  //Main function of the component
  componentDidMount() { //Interval runs repeatedly

    this.interval = setInterval(() => {

      //calls CalculateMoneySaved, and puts the value of this into MoneySaved, which is saved within the state
      this.setState({MoneySaved : this.CalculateMoneySaved() } );

    }, 300); //Sets the frequency of how often this function runs to once every 300 milliseconds

  }

  //Function calculates how much money the user has saved
  CalculateMoneySaved() {

    //First checks the props it recieved - if CostPerDay is NULL or NAN (not a number), or the date is NAN, the default value of 0.00 is returned
    //This code runs first to catch any invalid data before other calculations are done
    
    if(!this.props.CostPerDay || isNaN(this.props.DateOfLastUse)) {
      return 0.00;
    }

    //Else runs if the CostPerDay and DateOfLastUse are valid values
    else {

      //The current time is found by creating a new instance of the date class
      //with no argument passed to it, it'll default to the time when the function is called
      var TimeNow = new Date()

      //To work out the amount of money saved per millisecond, the cost of smoking per day is divided by the amount of miliseconds in a day
      var MoneySavedPerMillisecond = this.props.CostPerDay / 86400000

      //The miliseconds since the user last smoked is then calculated here
      //This is done by subtracting the DateOfLastUse date class instance from the current date's class instance
      //The result of this will be the difference between the two times in milliseconds
      var MilesecondsSinceLastUse = TimeNow - this.props.DateOfLastUse

      //The total saved is then found by multiplying the money saved per millisecond and the milliseconds since the user last used nicoteine
      var TotalSaved = MoneySavedPerMillisecond * MilesecondsSinceLastUse
      
      //This value is then returned, after rounding to 2 decimal places
      return TotalSaved.toFixed(2);

    }    
  }

  render() {

    {/*Render function now displays the value of MoneySaved, as it has been saved in the state*/}
    return (
      
      <div>
        <p>£{this.state.MoneySaved}</p>
      </div>

    );
  }
}

export default MoneyTracker;