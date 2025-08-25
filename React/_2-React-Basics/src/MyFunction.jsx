const MyFunction = () => {

  const Grettings = ()=>{
    console.log("Hello from function.");
  }
  return (
    <div>
      How to call a function in React ?
      <br />
      Here I am Making a button and after clicking I want to execute it's function and output will be shown in console: <br />
      <button onClick={Grettings}>Click to execute</button>
      <hr />
    </div>
  )
}

export default MyFunction