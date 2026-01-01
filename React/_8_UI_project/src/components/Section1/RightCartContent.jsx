import { IoMdArrowForward } from "react-icons/io"

const RightCartContent = (props) => {
  return (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">

        <div className='w-12 h-12 mt-7 ml-6 font-medium bg-gray-300 flex justify-center items-center rounded-full'>{props.id+1}</div>

        <div className='flex flex-col gap-5 items-center p-5'>
          <p className="mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi, suscipit soluta nisi aspernatur quibusdam.</p>

          <div className="flex">
            <div style={{backgroundColor:props.data.colour}}  className='w-30 h-10  justify-center items-center flex rounded-full'>
              {props.data.button}
            </div>
            <div style={{backgroundColor:props.data.colour}} className='w-10 h-10 font-medium relative justify-center items-center flex rounded-full '>
              <IoMdArrowForward />
            </div>

          </div>

        </div>
      </div>
  )
}

export default RightCartContent