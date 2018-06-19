import React, { Component } from 'react';

class EventForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        New Event on {this.props.selectedDate.toString()}
        <p>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" />
        </p>
        <p>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" />
        </p>
        <p>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" />
        </p>
        <p>
          <input type="submit" value="Create Event" />
        </p>
      </form>
    );
  }
}

export default EventForm;
