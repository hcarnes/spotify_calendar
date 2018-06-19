import React, { Component } from 'react';
import Modal from 'react-modal';
import EventForm from './EventForm';
import isSameDay from 'date-fns/is_same_day'
import { connect } from 'react-redux';

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
      <li onClick={this.showCreateEventForm}>
        {this.props.date.getDate()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeCreateEventForm}
        >
          <EventForm selectedDate={this.props.date} onSuccess={this.closeCreateEventForm} />
        </Modal>
        <p>
          <ul>
            {this.props.events.map(e => (<li>{e.description}</li>))}
          </ul>
        </p>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { events: state.events.filter(event => isSameDay(event.start, ownProps.date)) };
};

export default connect(mapStateToProps)(Day)
