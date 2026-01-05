import { useState } from "react"
const Counter = () => {
  const [number, setNumber] = useState(0)

  function Increased() {
    setNumber(number+ 1)
  }

  function Decreased() {
    if (number==0) {
      setNumber(0)
    }
    else{
      setNumber(number - 1)
    }
  }
  return (
    <div className="project">
        <h1 className="title">Simple Counter Project</h1>
        <h2>Counter is: {number}</h2>
        <div className="btns">
          <button className="btn" onClick={Increased}>Increase</button>
          <button className="btn" onClick={Decreased}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter