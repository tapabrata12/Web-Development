import { useState } from 'react'
import Counter from './components/Counter'


const App = () => {
  const [A, setA] = useState(10)
  const [name, setName] = useState("{}")
  const [arr, setArr] = useState([10, 20, 30])
  const [obj, setObj] = useState({ name: "Tapabrata", age: 25 })
  function changeA() {
    setA(A + 1)
  }

  function changeName() {
    setName("Tapabrata")
  }

  function changeArr() {
    // We do changes in this type this is the standard practice
    let newArr = [...arr]
    newArr[2] = 99;
    setArr(newArr)
  }

  function changeObj() {
    // We do changes in this type this is the standard practice
   let newObj = {...obj}
   newObj.name = "John"
   setObj(newObj)
  }

  function batchUpdate(){
    setA(prev => (prev + 1))
    setA(prev => (prev + 1))
    setA(prev => (prev + 1))
    /**
     setA(A + 1)
     setA(A + 1)
     setA(A + 1) // This will not work as expected because it is not identifying the previous value of A for each call because of the quick proccessing of JS engine
     */
  }
  return (
    <div>

      {/* Read value */}
      <h1>Value: {A}</h1>
      <h1>Name: {name}</h1>
      <h1>Array: {arr}</h1>
      <h1>Object: {JSON.stringify(obj)}</h1>
      {/* Update value */}
      <button onClick={changeA}>Increase A</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeArr}>Change Array</button>
      <button onClick={changeObj}>Change Object</button>
      <h3>Batch Update</h3>
      <button onClick={batchUpdate}>Increase A</button>
      <hr />
      <Counter/>
    </div>
  )
}

export default App