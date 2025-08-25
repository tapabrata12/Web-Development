import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    // This empty tags are called Fragments by this can render multiple components.
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default App