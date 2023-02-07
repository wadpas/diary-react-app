import { Link, useParams } from 'react-router-dom'
import persons from '../data/persons'

const Frend = () => {
  const params = useParams()
  const frend = persons.find((p) => p.lastName === params.lastName)
  return (
    <>
      <h3>
        {frend.lastName} {frend.firstName} - {frend.email}
      </h3>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  )
}

export default Frend
