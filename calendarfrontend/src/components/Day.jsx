import React, { Component } from 'react';
import Modal from 'react-modal';
import EventForm from './EventForm';
import isSameDay from 'date-fns/is_same_day'
import { connect } from 'react-redux';
import EventList from './EventList';

class Day extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  closeCreateEventForm = () => {
    this.setState({ modalIsOpen: false });
  }

  showCreateEventForm = () => {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <li>
        <span onClick={this.showCreateEventForm}>{this.props.date.getDate()}</span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeCreateEventForm}
        >
          <EventForm selectedDate={this.props.date} onSuccess={this.closeCreateEventForm} />
        </Modal>
        <p>
          <EventList events={this.props.events} />
        </p>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { events: state.events.filter(event => isSameDay(event.start, ownProps.date)) };
};

export default connect(mapStateToProps)(Day);
