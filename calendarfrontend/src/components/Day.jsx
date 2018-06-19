import React, { Component } from 'react';
import Modal from 'react-modal';

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
          contentLabel="Example Modal"
        >
          Hello World

          <form onSubmit={this.createEvent}>
            Event goes here
            <input type="submit" value="Create Event" />
          </form>
        </Modal>
      </li>
    );
  }
}

export default Day;
