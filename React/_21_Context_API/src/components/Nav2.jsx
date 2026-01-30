import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'
const Nav2 = () => {
  const { theme } = useContext(ThemeContextData)
  return (
    <div className="nav-buttons">
      <button className={theme}>Login</button>
      <button className={theme}>Signup</button>
    </div>
  )
}

export default Nav2