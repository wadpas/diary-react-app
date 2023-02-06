import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Actions from './components/diary/Actions'
import Events from './components/diary/Events'
import NewEvent from './components/diary/NewEvent'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import Frends from './components/frends/Frends'
import Frend from './components/frends/Frend'

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

  const completedEvents = events.filter((e) => e.isComplete).length

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <div>
                  <h1>Diary</h1>
                  <NewEvent addEvent={addEvent} />
                  <Events
                    events={events}
                    removeEvent={removeEvent}
                    toggleComplete={toggleComplete}
                  />
                  {!!events.length && (
                    <Actions
                      clearEvents={clearEvents}
                      removeCompleted={removeCompleted}
                      completedEvents={!!completedEvents}
                    />
                  )}
                  {!!completedEvents && (
                    <h2>
                      You completed {completedEvents} thing
                      {completedEvents > 1 ? 's' : ''}
                    </h2>
                  )}
                </div>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="frends" element={<Frends />} />
            <Route path="frends/:lastName" element={<Frend />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
