import React, { Component } from 'react';

class EventItem extends Component {

  render() {
    return (
      <li>
        {this.props.event.description}
      </li>
    );
  }
}

export default EventItem;
