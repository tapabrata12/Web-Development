import React from 'react'

const App = () => {

  localStorage.clear()
  sessionStorage.clear()
// Save data
  localStorage.setItem('name', 'John Wick')
  // Remove data
  localStorage.removeItem('name')
  const obj = {
    name: 'Tapabrata Chowdhury',
    age: 23,
    profession: 'Developer'
  }
  // We have to convert object into string before storing in localStorage
  localStorage.setItem('user',JSON.stringify(obj))
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);

  return (
    <div>App</div>
  )
}

export default App