import { useEffect, useState } from "react"

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function increaseA() {
    console.log("A is increasing");
  }
  function decreaseB() {
    console.log("B is decreasing");
  }


  useEffect(function () {
    increaseA()
    
  }, [a])

  useEffect(function () {
    decreaseB()
    
  }, [b])
 
  return (
    <div>

      <h1>Value of A: {a}</h1>
      <h1>Value of B: {b}</h1>

      <button onClick={() => {
        setA(a + 1)
      }}>Change A</button>


      <button onClick={() => {
        setB(b - 1)
      }}>Change B</button>


    </div>
  )
}

export default App