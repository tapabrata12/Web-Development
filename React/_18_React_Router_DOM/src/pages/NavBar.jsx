import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <h2>NavBar</h2>
        <div className='nav-list'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar