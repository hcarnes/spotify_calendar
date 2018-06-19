import React, { Component } from 'react';
import format from 'date-fns/format'
import lastDayOfMonth from 'date-fns/last_day_of_month'
import eachDay from 'date-fns/each_day'

class Month extends Component {
  formatMonth = () => {
    return format(this.props.date, "MMMM");
  }

  renderDays = () => {
    const endOfMonth = lastDayOfMonth(this.props.date);
    const daysOfMonth = eachDay(this.props.date, endOfMonth)

    return daysOfMonth.map(date => {
      return (
        <div>
          Day: {date.getDate()}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>{this.formatMonth()}</div>
        <div>{this.renderDays()}</div>
      </div>
    );
  }
}

export default Month;
