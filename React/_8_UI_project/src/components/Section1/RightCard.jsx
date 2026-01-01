
import RightCartContent from "./RightCartContent"

const RightCard = (props) => {
  
  return (
    <div className='w-1/3 h-full rounded-4xl overflow-hidden relative'>
      <img
        className=' h-full object-cover '
        src={props.img}
        alt="Working Professional"
      />
      <RightCartContent data={props} id={props.id}/>
    </div>
  )
}

export default RightCard