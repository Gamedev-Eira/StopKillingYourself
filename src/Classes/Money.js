import React, { Component } from 'react';
import BaseClass from './BaseClass';

//Created as a child of the BaseClass class
class MoneyTracker extends BaseClass {
  
  //This is the constructor for the class, which immedietly calls the contructor for Component
  //Props contains the arguments passed to the class
  constructor(props) { super(props);

    //Immedietely calls CalculateMoneySaved, and puts the value of this into MoneySaved, which is saved within the state
    this.state = { MoneySaved: super.CalculateMoneySaved(this.props.CostPerDay, this.props.TimeOfLastUse) };

  }

  //Main function of the component
  componentDidMount() { //Interval runs repeatedly

    this.interval = setInterval(() => {

      //calls CalculateMoneySaved, and puts the value of this into MoneySaved, which is saved within the state
      this.setState( { MoneySaved: super.CalculateMoneySaved(this.props.CostPerDay, this.props.TimeOfLastUse) } );

    }, 300); //Sets the frequency of how often this function runs to once every 300 milliseconds

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