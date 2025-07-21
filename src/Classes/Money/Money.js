import React, { Component } from 'react';

class MoneyTracker extends Component {
  
  constructor(props) {

    super(props);

    this.state = { MoneySaved: this.CalculateMoneySaved() };

  }

  componentDidMount() {

    this.interval = setInterval(() => {

      this.setState({MoneySaved : this.CalculateMoneySaved() } );

    }, 300);

  }

  CalculateMoneySaved() {

    if(!this.props.CostPerDay || !this.props.DateOfLastUse) {
      return 0.00;
    }

    else {

      var TimeNow = new Date()

      var MoneySavedPerMillisecond = this.props.CostPerDay / 86400000
      var MilesecondsSinceLastUse = TimeNow - this.props.DateOfLastUse

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
