import { useState } from "react"
import Card from "./components/Card"

const App = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, description })
    setTask(copyTask)

    setTitle("")
    setDescription("")
  }

  const deleteHandler = (ID) => {
    const copyTask = [...task];
    copyTask.splice(ID, 1);
    setTask(copyTask);
  }


  return (
    <div className='h-screen bg-black text-white flex gap-5'>
      <form className=' w-2/3 flex flex-col p-10 items-center gap-5'
        onSubmit={(e) => {
          submitHandler(e)
        }}>

        <h1 className='text-3xl font-bold'>Simple Note Taking App</h1>
        <input className='bg-gray-800 font-medium px-5 py-2 rounded-sm items-center w-full' type="text" placeholder='Enter Tasks'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea className='bg-gray-800 font-medium h-20 px-5 py-2 rounded-sm items-center w-full' type="text" placeholder='Enter Tasks' value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }
          } />
        <input className='bg-blue-500 hover:bg-blue-900 active:scale-95 font-bold text-white px-5 py-2 rounded-sm cursor-pointer w-1/3' type="submit" value='Add Note' />
      </form>

      <div className="w-2/3 bg-gray-800 p-5 flex flex-col gap-5">
        <h1 className='text-2xl font-bold p-5 border-b border-gray-600'>Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          {task.map((elem, idx) => {
            return <Card key={idx} title={elem.title} description={elem.description} ID={idx} deleteHandler={deleteHandler} />
          })}

        </div>
      </div>
    </div>
  )
}

export default App