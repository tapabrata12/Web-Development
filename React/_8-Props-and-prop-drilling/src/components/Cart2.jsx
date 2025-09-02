import React from 'react'

const Cart2 = (e) => {
  return (
    <div className='inline-block p-6 text-center rounded'>
        <h1>{e.firstName} {e.lastName}</h1>
        <h2>City: {e.city}</h2>
        <h3>Age: {e.age}</h3>
        <button className='cursor-pointer bg-sky-500 hover:bg-sky-700 p-2 rounded'>Add friend</button>
    </div>
  )
}

export default Cart2