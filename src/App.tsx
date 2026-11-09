import './App.css'
import UpcomingEvents from './components/events/UpcomingEvents';
import NavBar from './components/nav/NavBar';
import { config } from './config/Config'
import WaitingApp from './WaitingApp'

function App() {
  if (config.hidePageProgress) {
    return (<WaitingApp />);
  }
  return (
    <div className='app'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <h1>Koko's Programming Classes</h1>
        <UpcomingEvents events={config.events} />
      </main>
    </div>
  )
}

export default App
