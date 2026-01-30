import NavBar from './components/NavBar'
import Button from './components/Button'
import { useContext } from 'react'
import ThemeContext, { ThemeContextData } from './context/ThemeContext'
const App = () => {
  const { theme } = useContext(ThemeContextData)
  return (
    <div className={theme}>
      <NavBar />
      <div className='main'>
        <Button />
      </div>
    </div>
  )
}

export default App