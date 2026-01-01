import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-16 py-10 w-full h-16'>
        <h4 className='bg-black text-white px-5 py-2 rounded-full uppercase'>Target Audience</h4>
        <button className='uppercase px-5 py-2 rounded-full text-sm tracking-widest flex items-center gap-2 font-medium '> 
          <MdOutlineSubdirectoryArrowRight />
          Digital Banking Platform
        </button>
    </div>
  )
}

export default Navbar