import Center from './Center'
import Navbar from './Navbar'

const Section1 = (props) => {
  // console.log(props.data)
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Center data={props.data}/>
    </div>
  )
}

export default Section1