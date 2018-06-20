import React, { Component } from 'react';
import format from 'date-fns/format';
import Modal from 'react-modal';
import EventForm from './EventForm';

class EventItem extends Component {
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
      <li onClick={this.showCreateEventForm}>
        <div className="eventItemElement">{this.props.event.description}</div>
        <div className="eventItemElement">
          {format(this.props.event.start, "H:mm")}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeCreateEventForm}
        >
          <EventForm selectedDate={this.props.event.start} event={this.props.event} onSuccess={this.closeCreateEventForm} />
        </Modal>
      </li>
    );
  }
}

export default EventItem;
