import React, { Component } from 'react';
import EventItem from './EventItem';

class EventList extends Component {

  render() {
    return (
      <ul className="eventList">
        {this.props.events.map(e => (<EventItem event={e} />))}
      </ul>
    );
  }
}

export default EventList;
