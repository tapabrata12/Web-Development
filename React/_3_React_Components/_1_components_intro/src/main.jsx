import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We can import our app component as a HTML tag link thing in JSX */}
    <App /> 
  </StrictMode>,
)
