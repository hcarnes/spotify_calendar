import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEvent } from '../actions/addEvent';
import format from 'date-fns/format';

class EventForm extends Component {
  constructor(props) {
    super(props);

    if (props.event) {
      const startTime = format(props.event.start, "HH:mm")
      const endTime = format(props.event.end, "HH:mm")

      this.state = {
        event: Object.assign({ startTime, endTime }, props.event)
      }
    } else {
      this.state = { event: {} }
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.addEvent({ ...this.state.event, date: this.props.selectedDate });
    this.props.onSuccess();
  }

  handleChange = (ev) => {
    const event = {
      ...this.state.event,
      [ev.target.name]: ev.target.value
    }
    this.setState({ event });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        New Event on {this.props.selectedDate.toString()}
        <p>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={this.state.event.description} onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" name="startTime" value={this.state.event.startTime} onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" name="endTime" value={this.state.event.endTime} onChange={this.handleChange} />
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
