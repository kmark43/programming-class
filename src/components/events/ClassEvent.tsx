import { Component } from 'react'
import type { EventConfig } from '../../config/Config';

export default class ClassEvent extends Component<EventConfig> {
  constructor(props: EventConfig) {
    super(props);
  }

  render() {
    return (
      <div className="classEvent">
        <div className="eventHeader">
        </div>
        <div className="date">
          {this.props.date}
        </div>
        <div className="eventTitle">
          {this.props.title}
        </div>
        <div className="location">
          {this.props.location}
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    )
  }
}

