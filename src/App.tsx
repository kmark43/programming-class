import './App.css'
import UpcomingEvents from './components/events/UpcomingEvents';
import NavBar from './components/nav/NavBar';
import { config } from './config/Config'
import IntroHome from './courses/101/IntroHome';
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
        <h1>Spacey Koko Programming Classes</h1>
        <UpcomingEvents events={config.events} />
        {/* <IntroHome lessons={config.lessons} /> */}
      </main>
    </div>
  )
}

export default App
