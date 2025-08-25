import { useState } from "react"

const AnotherForm = () => {
    const [first, setfirst] = useState('');
    const submitHandeler = (e)=>{
        e.preventDefault();
        console.log(first,"Submitted");
        console.log(e);
        setfirst('');
    }
    return (
        <div>
          <p className="text-xl m-8"><strong>Two way binding</strong></p>
            <form className="m-8" onSubmit={(e)=>{
                submitHandeler(e)
            }}>
                <label htmlFor="Name"><strong>Name:</strong></label> <br />
                <input type="text" 
                value={first}
                onChange={(e)=>{setfirst(e.target.value)}}
                className="border-[2px] border-solid border-black px-4 py-3 bg-sky-500/50 " />
                <br /><br />
                <input type="submit" value="Submit" className="px-4 py-3 text-xl cursor-pointer border bg-cyan-500 font-semibold" />
            </form>
        </div>
    )
}

export default AnotherForm