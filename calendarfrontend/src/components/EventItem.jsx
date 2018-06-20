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

  closeEventForm = () => {
    this.setState({ modalIsOpen: false });
  }

  showEventForm = () => {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <li onClick={this.showEventForm}>
        <div className="eventItemElement">{this.props.event.description}</div>
        <div className="eventItemElement">
          {format(this.props.event.start, "H:mm")}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeEventForm}
        >
          <EventForm selectedDate={this.props.event.start} event={this.props.event} onSuccess={this.closeEventForm} />
        </Modal>
      </li>
    );
  }
}

export default EventItem;
