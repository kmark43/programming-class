import { Component } from 'react'
import type { EventConfig } from '../../config/ConfigTypes'
import ClassEvent from './ClassEvent';
import './UpcomingEvents.css';

export interface UpcomingEventsProps {
  events: EventConfig[],
}

export default class UpcomingEvents extends Component<UpcomingEventsProps> {
  constructor(props: UpcomingEventsProps) {
    super(props);
  }

  render() {
    return (
      <div className='upcomingEvents'>
        <h2>Upcoming Classes</h2>
        {
          this.props.events.map((e, i) => 
            <ClassEvent key={`event-${i}`} title={e.title} date={e.date} location={e.location} description={e.description} />)
        }
      </div>
    )
  }
}
