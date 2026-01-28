import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex bg-cyan-800 items-center justify-between px-8 py-4'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      <div className='flex gap-5'>
        <Link className='text-white text-2xl font-bold' to='/'>Home</Link>
        <Link className='text-white text-2xl font-bold' to='/about'>About</Link>
        <Link className='text-white text-2xl font-bold' to='/products'>Products</Link>
        <Link className='text-white text-2xl font-bold' to='/course'>Course</Link>
      </div>
    </nav>
  )
}

export default NavBar