import { RiFileShredLine, RiEyeOffLine } from 'react-icons/ri'
import Button from '../button/Button'

function Actions({ clearEvents, removeCompleted }) {
  return (
    <div>
      <Button title="Reset events" onClick={clearEvents}>
        Clear diary
        <RiFileShredLine style={{ paddingLeft: 10 }} />
      </Button>
      <Button title="Clear events" onClick={removeCompleted}>
        Hide done
        <RiEyeOffLine style={{ paddingLeft: 10 }} />
      </Button>
    </div>
  )
}

export default Actions
