import { useState } from 'react'
import styles from './NewEvent.module.css'

function NewEvent({ addEvent }) {
  const [text, setText] = useState('')

  const onSubmite = (event) => {
    event.preventDefault()
    addEvent(text)
    setText('')
  }

  return (
    <div className={styles.newEvent}>
      <form onSubmit={onSubmite}>
        <input
          placeholder="Enter new event"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default NewEvent
