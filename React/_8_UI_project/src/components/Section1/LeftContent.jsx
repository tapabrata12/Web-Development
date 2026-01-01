import LeftHeader from './LeftHeader'
import LeftIcon from './LeftIcon'
import LeftParagraph from './LeftParagraph'

const LeftContent = () => {
  return (
    <div className='w-1/3 h-full flex flex-col justify-between'>

      <div className='flex flex-col'>
        <LeftHeader />
        <LeftParagraph />
      </div>

      <LeftIcon />
    </div>
  )
}

export default LeftContent