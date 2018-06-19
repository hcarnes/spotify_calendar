import React, { Component } from 'react';
import Month from './Month';
import addMonths from 'date-fns/add_months';
import startOfMonth from 'date-fns/start_of_month';
import format from 'date-fns/format'

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedMonth: startOfMonth(new Date())
    };
  }
  nextMonth = () => {
    this.setState({
      selectedMonth: addMonths(this.state.selectedMonth, 1)
    });
  }

  previousMonth = () => {
    this.setState({
      selectedMonth: addMonths(this.state.selectedMonth, -1)
    });
  }

  formatSelectedMonth = () => {
    return format(this.state.selectedMonth, "MMMM");
  }

  render() {
    return (
      <div>
        <span className="monthBtn" onClick={this.previousMonth}>&#8678;</span>
        {this.formatSelectedMonth()}
        <span className="monthBtn" onClick={this.nextMonth}>&#8680;</span>
        <Month date={this.state.selectedMonth} />
      </div>
    );
  }
}

export default Calendar;
