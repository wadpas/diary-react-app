import styles from './Event.module.css'
import { RiTodoFill } from 'react-icons/ri'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Event({ event, removeEvent, toggleComplete }) {
  return (
    <div
      className={`${styles.event} ${
        event.isComplete ? styles.completedEvent : ''
      }`}
    >
      <RiTodoFill className={styles.eventIcon} />
      <div className={styles.eventText}>{event.text}</div>
      <RiDeleteBin6Fill
        className={styles.deleteIcon}
        onClick={() => removeEvent(event.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleComplete(event.id)}
      />
    </div>
  )
}

export default Event
