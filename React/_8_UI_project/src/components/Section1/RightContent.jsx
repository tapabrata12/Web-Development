import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  // console.log(props.data)
  return (
    <div className='w-2/3 h-full flex gap-5'>
      {props.data.map((item, index) => (
        <RightCard key={index} id={index} img={item.img} button={item.button} colour={item.colour} />
      ))}
    </div>
  )
}

export default RightContent