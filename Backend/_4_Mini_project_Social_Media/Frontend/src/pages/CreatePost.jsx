import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post('http://localhost:3000/create-post', formData).then((res) => {
            navigate('/');
        });
    }

    function ChangeCaption(e) {
        setCaption(e.target.value);
    }

    return (
        <section className='w-full h-screen bg-black text-white flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-5xl font-bold'>Create Post</h1>
            <form onSubmit={submitHandler} className='w-150 h-60 flex flex-col border-amber-500 border-2 p-4 gap-5 rounded-lg'>
                <div className="flex items-center justify-center">
                    <input type="file" name="image" id="file-upload" // Add an ID 
                        className="hidden" // Hide the default input
                        accept="image/*"
                        required
                    />
                    <label htmlFor="file-upload" // Link the label to the input ID 
                        className="active:scale-95 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">Choose an Image</label>
                </div>
                <input value={caption} onChange={ChangeCaption} className='px-3 py-2 border-amber-500 border-2 rounded-full' type="text" name='caption' placeholder="What's on your mind?" required />
                <input type="submit" className='bg-amber-500 text-black font-bold py-2 px-4 rounded-lg mt-2 active:scale-95 cursor-pointer' />
            </form>
        </section>
    )
}

export default CreatePost