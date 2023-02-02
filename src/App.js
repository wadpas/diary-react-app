import { useState } from 'react'
import './App.css'
import Events from './components/events/Events'
import NewEvent from './components/newEvent/NewEvent'

function App() {
  const [events, setEvent] = useState(['useState1', 'useState2'])

  const addEvent = (event) => {
    setEvent([...events, event])
  }

  return (
    <div className="App">
      <h1>Diary</h1>
      <NewEvent addEvent={addEvent} />
      <Events events={events} />
    </div>
  )
}

export default App
