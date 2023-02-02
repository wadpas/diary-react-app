import Event from '../event/Event'

function Events({ events }) {
  return (
    <div>
      {events.map((e, index) => (
        <Event event={e} key={index} />
      ))}
    </div>
  )
}
export default Events
