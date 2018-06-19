import React, { Component } from 'react';

class Day extends Component {

  showCreateEventForm = () => {
    alert("new event form goes here")
  }

  render() {
    return (
      <li onClick={this.showCreateEventForm}>
        {this.props.date.getDate()}
      </li>
    );
  }
}

export default Day;
