import { useState } from "react"

function AnotherFuncHooks() {

    let [val, setval] = useState(0);
  return (
    <div>
        <h1>Increment and Decrement</h1>
        <p>Value is {val}</p>
        <button onClick={()=>setval(val+=10)}>Increment</button>
        <button onClick={()=>setval(val-=10)}>Decrement</button>
    </div>
  )
}

export default AnotherFuncHooks