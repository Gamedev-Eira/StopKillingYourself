import React, { Component } from 'react';

//Achievement class acts as a template for an achievment, which can then be created and managed elsewhere
//Created as a child of the component class
class Achievement extends Component {
  
  //This is the constructor for the Achievment, which immedietly calls the contructor for Component
  //Props contains the arguments passed to the class
  constructor(props) { super(props);

    //Achievements have a default message they display if they've not been fulfilled yet
    //If, at construction, the DefaultMessage is equal to "Default", a basic message is used
    //Otherwise, a custom one can be entered, and will be used
    if(props.DefaultMessage === "Default") { this.DefaultMessage = "Keep going, you can do it!" }
    else ( this.DefaultMessage = props.DefaultMessage )

    //The title and tagline (displayed when achieved) are also set here
    this.Title = props.Title
    this.Tagline = props.Tagline
    
    //The achievement condition is a number, representing either an elapsed timeframe or a currency value
    this.AchievementCondition = props.AchievementCondition
    //Achievement type is a string representing what type of achievement it is - more detail bellow
    this.AchievementType = props.AchievementType

    //Recieves the current Units cost, Units amount, and LastUse date to run maths
    this.CostPerUnit = props.Cost
    this.UnitsPerWeek = props.Units
    this.LastUse = props.Last

    //These determine what function to run to decide if the achievement condition has been met

    if(this.AchievementType === "Other") { this.state = { Achieved : true} }
    //the Other achievement type is for the initial achievement you get for accessing the app.
    //this will automatically be true if viewed, so is automatically set to be true

    //Else ifs check for a timer or money achievement type, and calls the appropriate function
    //The value of Achieved is then set to the return value of the function, as they return a bool value
    else if (this.AchievementType === "Timer") {this.state = { Achieved : this.CalculateTimerCondtion()} }
    else if (this.AchievementType === "Money") {this.state = { Achieved : this.CalculateMoneyCondition()} }

  }

  //Main function of the component
  componentDidMount() {

    this.interval = setInterval(() => { //Interval runs repeatedly

        //If statements first check if this achievement hasn't been achieved.
        //If they haven't, the achievement condition is calculated in the same way as in the constructor

        if(this.state.Achieved == false && this.AchievementType === "Money") {
            this.setState({Achieved : this.CalculateMoneyCondition() } );
            
        } if(this.state.Achieved == false && this.AchievementType === "Timer") {
            this.setState({Achieved : this.CalculateTimerCondtion() } );
        }

    }, 300); //Sets the frequency of how often this function runs - unsure the exact time, but felt appropriately responsive during testing.

  }

  //ReturnTitle and Return Tagline return the data the Achievement Manager will need to display
  ReturnTitle() { return (this.Title); }

  //ReturnTagline first checks whether the achievment has been achieved or not, and then either returns the tagline or default message accordingly.
  ReturnTagline() {

    if(this.state.Achieved) { return this.Tagline }
    else { return this.DefaultMessage }
  }

  //Calculates the money condition
  CalculateMoneyCondition() {

    //Uses the daily cost, usage stats, and amount of time since the last use to calculate how much money has been saved
    var CostPerDay = ((this.UnitsPerWeek * this.CostPerUnit)/7)
    var MoneySavedPerMillisecond = CostPerDay / 86400000
    var TimeNow = new Date()
    var DateOfLastUse = new Date(this.LastUse)
    var MilesecondsSinceLastUse = TimeNow.getTime() - DateOfLastUse.getTime()

    var TotalSaved = (MoneySavedPerMillisecond * MilesecondsSinceLastUse).toFixed(2);

    //The amount of money saved is then compared - if it's equal or greater than the amount needed, the function returns true
    if (TotalSaved >= this.AchievementCondition) { return true }
    else { return false } //otherwise it returns false
    
  }//end money func

  //Calculate timer condition
  CalculateTimerCondtion() {

    //Function calculates how many days it's been since the last usage
    this.LastUseTimeObject = new Date(this.LastUse)
    this.TimeDifference = new Date() - this.LastUseTimeObject;
    var days = Math.floor(this.TimeDifference / (1000 * 60 * 60 * 24));

    //Function then returns true if this number matches or exceeds the requirement, or false if it doesn't.
    if (this.AchievementCondition <= days) { return true }
    else {return false}

  }//end timer func
}//end achievement

export default Achievement;