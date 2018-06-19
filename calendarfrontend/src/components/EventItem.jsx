import React, { Component } from 'react';
import format from 'date-fns/format'

class EventItem extends Component {

  render() {
    return (
      <li>
        <div className="eventItemElement">{this.props.event.description}</div>
        <div className="eventItemElement">
          {format(this.props.event.start, "H:mm")}
        </div>
      </li>
    );
  }
}

export default EventItem;
