import React, { Component } from 'react';

class EventList extends Component {

  render() {
    return (
      <ul class="eventList">
        {this.props.events.map(e => (<li>{e.description}</li>))}
      </ul>
    );
  }
}

export default EventList;
