import Event from './Event'

function Events({ events, removeEvent, toggleComplete }) {
  return (
    <div>
      {!events.length && <h2>Diary is empty</h2>}
      {events.map((e) => (
        <Event
          event={e}
          key={e.id}
          removeEvent={removeEvent}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  )
}
export default Events
