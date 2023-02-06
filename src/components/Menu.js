import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="about">About</NavLink>
      <NavLink to=".">Home</NavLink>
      <NavLink to="frends">Frends</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  )
}

export default Menu
