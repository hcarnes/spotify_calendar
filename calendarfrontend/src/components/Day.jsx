import React, { Component } from 'react';
import Modal from 'react-modal';
import EventForm from './EventForm';

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

  createEvent = (ev) => {
    ev.preventDefault();
    this.closeCreateEventForm();
  }

  render() {
    return (
      <li onClick={this.showCreateEventForm}>
        {this.props.date.getDate()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeCreateEventForm}
        >
          <EventForm selectedDate={this.props.date} onSubmit={this.createEvent} />
        </Modal>
      </li>
    );
  }
}

export default Day;
