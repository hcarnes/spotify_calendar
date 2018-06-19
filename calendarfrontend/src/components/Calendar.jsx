import React, { Component } from 'react';
import Month from './Month';
import addMonths from 'date-fns/add_months'

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedMonth: new Date()
    };
  }
  nextMonth = () => {
    this.setState({
      selectedMonth: addMonths(this.state.selectedMonth, 1)
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.nextMonth}>Next Month</div>
        <Month date={this.state.selectedMonth} />
      </div>
    );
  }
}

export default Calendar;
