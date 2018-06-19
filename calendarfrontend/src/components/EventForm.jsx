import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEvent } from '../actions/addEvent';

class EventForm extends Component {

  handleOnSubmit = (event) => {
    event.preventDefault();
    const eventData = new FormData(event.target);
    const eventObject = {};
    for (const [key, value] of eventData.entries()) {
      eventObject[key] = value;
    }

    this.props.addEvent({ ...eventObject, date: this.props.selectedDate });
    this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        New Event on {this.props.selectedDate.toString()}
        <p>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </p>
        <p>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" name="startTime" />
        </p>
        <p>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" name="endTime" />
        </p>
        <p>
          <input type="submit" value="Create Event" />
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addEvent: addEvent
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(EventForm);
