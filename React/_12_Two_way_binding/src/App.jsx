import { useState } from "react";

const App = () => {
  const [from, setForm] = useState("")

  function behaviour(e) {
    e.preventDefault();
    setForm('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        // Blocks Reload but clears input box after submit
        behaviour(e);
      }}>

        <input value={from}
        
        onChange={(params)=>{
          setForm(params.target.value);
        }}
        type="text" placeholder="Enter your name" />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App