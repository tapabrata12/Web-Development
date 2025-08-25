
import Navpart2 from './Navpart2'

const Navbar = () => {
    return (
        // Name of the component file should be in first letter uppercase to as it is the rule 
       <>
         <nav className='flex justify-between py-5 px-10 bg-emerald-950 text-white'>
            <h2 className='text-2xl'>My Portflollio</h2>
            {/* Component insde component */}
            <Navpart2/>
        </nav>
       </>
    )
}

export default Navbar