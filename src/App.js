import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Actions from './components/actions/Actions'
import Events from './components/events/Events'
import NewEvent from './components/newEvent/NewEvent'

function App() {
  const [events, setEvent] = useState([
    {
      id: '8b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      text: 'Read "Dune" by Frank Herbert',
      isComplete: false,
    },
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      text: 'Watch "Inception" by Christopher Nolan',
      isComplete: false,
    },
  ])

  const addEvent = (text) => {
    const newEvent = {
      id: uuidv4(),
      text: text,
      isComplete: false,
    }
    setEvent([...events, newEvent])
  }

  const removeEvent = (id) => {
    setEvent(events.filter((e) => e.id !== id))
  }

  const toggleComplete = (id) => {
    setEvent(
      events.map((e) =>
        e.id === id ? { ...e, isComplete: !e.isComplete } : { ...e }
      )
    )
  }

  const clearEvents = () => {
    setEvent([])
  }

  const removeCompleted = () => {
    setEvent(events.filter((e) => !e.isComplete))
  }

  return (
    <div className="App">
      <h1>Diary</h1>
      <NewEvent addEvent={addEvent} />
      <Events
        events={events}
        removeEvent={removeEvent}
        toggleComplete={toggleComplete}
      />{' '}
      {!!events.length && (
        <Actions clearEvents={clearEvents} removeCompleted={removeCompleted} />
      )}
    </div>
  )
}

export default App
