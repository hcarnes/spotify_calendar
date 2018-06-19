import React, { Component } from 'react';
import Month from './Month';

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      monthOffset: 0
    }
  }
  nextMonth = () => {
    this.setState({
      monthOffset: this.state.monthOffset + 1
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.nextMonth}>Next Month</div>
        <Month monthOffset={this.state.monthOffset} />
      </div>
    );
  }
}

export default Calendar;
