import { Component } from 'react'
import type { EventConfig } from '../../config/ConfigTypes';

export default class ClassEvent extends Component<EventConfig> {
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

