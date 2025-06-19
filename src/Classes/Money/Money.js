import React, { Component } from 'react';

//timer is a class, uses reacts Component class as a parent
class MoneyTracker extends Component {
  
  //constructor of MoneyTracker
  constructor(props) {

    //Calls the constructor of the parent Component class
    super(props);

    this.state = { MoneySaved: this.CalculateMoneySaved() };
  }

  componentDidMount() {

    this.interval = setInterval(() => {

      this.setState({MoneySaved : this.CalculateMoneySaved() } );

    }, 300); // Sets update time - unsure exactly how long this is, but felt like a good responsive time frame

  }

  //Function called in constructor, and then every 30 seconds to cause an update to the timer
  CalculateMoneySaved() {

    

    if(!this.props.CostPerDay || !this.props.DateOfLastUse) {
      return 0.00;
    }

    else {

      var TimeNow = new Date()

      var MoneySavedPerMillisecond = this.props.CostPerDay / 86400000
      var MilesecondsSinceLastUse = TimeNow.getTime() - this.props.DateOfLastUse.getTime()

      var TotalSaved = MoneySavedPerMillisecond * MilesecondsSinceLastUse

      return TotalSaved.toFixed(2);

    }    
    
  }

  render() {

    return (
      <div>
        <p>£{this.state.MoneySaved}</p>
      </div>
    );
  }
}

export default MoneyTracker;