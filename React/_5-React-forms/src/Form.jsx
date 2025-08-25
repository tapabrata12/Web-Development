const Form = () => {

  const submitHandel = (e)=>{
      e.preventDefault(e);
      console.log("Submitted",e);
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandel(e)}} className="m-8">
        <label htmlFor="name"><strong>Name:</strong></label> <br />
        <input type="text" className="border-[2px] border-solid border-black px-4 py-3 bg-sky-500/50 "/>
        <br /><br />
        <label htmlFor="ph" ><strong>Number:</strong></label> <br />
        <input type="number"  className="border-[2px] border-solid border-black px-4 py-3 bg-sky-500/50"/>
        <br /><br />
        <input type="submit" value="Submit" className="px-4 py-3 text-xl cursor-pointer border bg-cyan-500 font-semibold"/>
      </form>
      <hr />
    </div>
  )
}

export default Form;