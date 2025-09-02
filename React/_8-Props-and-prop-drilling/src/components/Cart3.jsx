import React from 'react'

const Cart3 = (e) => {
  return (
    <div className=' w-60 mr-12 bg-amber-200 inline-block p-2 text-center rounded'>
        <img className=' ml-12 h-32 w-32 rounded-full mb-3' src={e.pic} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{e.name}</h1>
        <h2>City: {e.city}</h2>
        <h3>Age: {e.age}</h3>
        <h3>Proffession: </h3>
        <h3 className='text-blue-500'>{e.pro}</h3>
        <button className='cursor-pointer bg-sky-500 hover:bg-emerald-700 p-2 rounded text-white px-4 py-2 font-medium mt-5'>Add friend</button>
        
        {/* Now if we have more components then we can send data by by that object parameter called 'e' into more sub-files */}
    </div>
  )
}

export default Cart3