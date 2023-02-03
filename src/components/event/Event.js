import styless from './Event.module.css'

function Event({ event, index, removeEvent }) {
  return (
    <div className={styless.event}>
      <div
        className={styless.eventText}
        onDoubleClick={() => removeEvent(index)}
      >
        {event}
      </div>
    </div>
  )
}

export default Event
