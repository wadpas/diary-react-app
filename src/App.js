import { useState } from 'react'
import './App.css'
import Events from './components/events/Events'
import NewEvent from './components/newEvent/NewEvent'

function App() {
  const [events, setEvent] = useState([])

  const addEvent = (event) => {
    setEvent([...events, event])
  }

  const removeEvent = (index) => {
    setEvent(events.filter((_, i) => i !== index))
  }

  return (
    <div className="App">
      <h1>Diary</h1>
      <NewEvent addEvent={addEvent} />
      <Events events={events} removeEvent={removeEvent} />
    </div>
  )
}

export default App
