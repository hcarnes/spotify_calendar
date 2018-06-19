import React, { Component } from 'react';
import format from 'date-fns/format'
import addMonths from 'date-fns/add_months'

class Month extends Component {
  formatMonth = () => {
    return format(this.props.date, "MMMM");
  }

  render() {
    return (
      <div>
        {this.formatMonth()}
      </div>
    );
  }
}

export default Month;
