import { useState } from 'react'
import Button from '../button/Button'
import styles from './NewEvent.module.css'

function NewEvent({ addEvent }) {
  const [text, setText] = useState('')

  const onSubmite = (submit) => {
    submit.preventDefault()
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
        <Button type="submit" title={'Submit'}>
          Submit
        </Button>
      </form>
    </div>
  )
}
export default NewEvent
