import React from 'react'

const Number = () => {
    let randomNumber = Math.random();
  return (
    <div>Number is: {Math.floor(randomNumber*10)}</div>
  )
}

export default Number