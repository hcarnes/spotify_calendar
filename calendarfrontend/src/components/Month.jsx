import React, { Component } from 'react';
import format from 'date-fns/format'
import addMonths from 'date-fns/add_months'

class Month extends Component {
  calculateMonth = () => {
    const currentDate = new Date();
    const shiftedDate = addMonths(currentDate, this.props.monthOffset);
    return format(shiftedDate, "MMMM");
  }

  render() {
    return (
      <div>
        {this.calculateMonth()}
      </div>
    );
  }
}

export default Month;
