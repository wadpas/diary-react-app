import { useState } from 'react'

function NewEvent({ addEvent }) {
  const [text, setText] = useState('')

  const onSubmite = (event) => {
    event.preventDefault()
    addEvent(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmite}>
      <input
        placeholder="Enter new event"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default NewEvent
