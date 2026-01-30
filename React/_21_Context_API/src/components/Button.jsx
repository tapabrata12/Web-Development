import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContextData)

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  )
}

export default Button