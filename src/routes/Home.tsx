import UpcomingEvents from '../components/events/UpcomingEvents';
import { config } from '../config/Config';
import type { Route } from './+types/Home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spacey Koko Classes" },
    { name: "description", content: "Koko's Programming Classes" },
  ];
}

export default function Home() {
  return (
      <main>
        <h1>Spacey Koko Programming Classes</h1>
        <UpcomingEvents events={config.events} />
      </main>
    )
}
