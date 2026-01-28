import React from 'react'
import { useNavigate } from "react-router";

const NavBar2 = () => {
    const navigate = useNavigate();

    function Previous() {
        navigate(-1);
    }

    function Next() {
        navigate(1);
    }

    function Home() {
        navigate("/");
    }

    return (
        <div className='py-3 w-full flex justify-start items-center gap-5'>
            <button className='cursor-pointer active:scale-95 bg-blue-500 text-white px-2 py-1 rounded' onClick={Home}>Home</button>
            <button className='cursor-pointer active:scale-95 bg-blue-500 text-white px-2 py-1 rounded' onClick={Previous}>Previous</button>
            <button className='cursor-pointer active:scale-95 bg-blue-500 text-white px-2 py-1 rounded' onClick={Next}>Next</button>
        </div>
    )
}

export default NavBar2