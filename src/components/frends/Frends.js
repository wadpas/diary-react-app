import { Link } from 'react-router-dom'
import persons from '../data/persons'

const Frends = () => {
  return persons.map((p) => (
    <p key={p.id}>
      <Link to={p.lastName} className="frendLink">
        {p.lastName} {p.lastName}
      </Link>
    </p>
  ))
}

export default Frends
