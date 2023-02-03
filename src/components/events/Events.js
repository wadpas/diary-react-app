import Event from '../event/Event'
import styles from './Events.module.css'

function Events({ events, removeEvent }) {
  return (
    <div className={styles.events}>
      {!events.length && <h2>Diary is empty</h2>}
      {events.map((e, index) => (
        <Event event={e} key={index} removeEvent={removeEvent} index={index} />
      ))}
    </div>
  )
}
export default Events
