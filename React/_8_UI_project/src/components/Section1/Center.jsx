import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = (props) => {
  // console.log(props.data)
  return (
    <div className='flex w-full h-[calc(100vh-4rem)] justify-center items-center px-10 py-10 gap-5'>
        <LeftContent/>
        <RightContent data={props.data}/>
    </div>
  )
}

export default Center