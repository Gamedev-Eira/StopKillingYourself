import React, { Component } from 'react';

class Achievement extends Component {
  
  constructor(props) {

    super(props);

    if(props.DefaultMessage === "Default") { this.DefaultMessage = "Keep going, you can do it!" }
    else ( this.DefaultMessage = props.DefaultMessage )

    this.Title = props.Title
    this.Tagline = props.Tagline
 
    this.AchievementCondition = props.AchievementCondition
    this.AchievementType = props.AchievementType

    this.CostPerUnit = props.Cost
    this.UnitsPerWeek = props.Units
    this.LastUse = props.Last

    if(this.AchievementType === "Other") { this.state = { Achieved : true} }
    else if (this.AchievementType === "Timer") {this.state = { Achieved : this.CalculateTimerCondtion()} }
    else if (this.AchievementType === "Money") {this.state = { Achieved : this.CalculateMoneyCondition()} }
  }

  componentDidMount() {

    this.interval = setInterval(() => {

        if(this.state.Achieved == false && this.AchievementType === "Money") {
            this.setState({Achieved : this.CalculateMoneyCondition() } );
            
        } if(this.state.Achieved == false && this.AchievementType === "Timer") {
            this.setState({Achieved : this.CalculateTimerCondtion() } );
        }

    }, 300);

  }

  ReturnTitle() { return (this.Title); }

  ReturnTagline() {

    if(this.state.Achieved) { return this.Tagline }
    else { return this.DefaultMessage }
  }

  CalculateMoneyCondition() {

    var CostPerDay = ((this.UnitsPerWeek * this.CostPerUnit)/7)
    var MoneySavedPerMillisecond = CostPerDay / 86400000

    var TimeNow = new Date()
    var DateOfLastUse = new Date(this.LastUse)

    var MilesecondsSinceLastUse = TimeNow.getTime() - DateOfLastUse.getTime()

    var TotalSaved = (MoneySavedPerMillisecond * MilesecondsSinceLastUse).toFixed(2);

    if (TotalSaved >= this.AchievementCondition) { return true }
    else { return false }
    
  }

  CalculateTimerCondtion() {

    this.LastUseTimeObject = new Date(this.LastUse)
    this.TimeDifference = new Date() - this.LastUseTimeObject;

    var days = Math.floor(this.TimeDifference / (1000 * 60 * 60 * 24));

    if (this.AchievementCondition <= days) { return true }
    else {return false}

  }
}

export default Achievement;