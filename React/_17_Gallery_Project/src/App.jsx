import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import Cart from "./components/Cart"

const App = () => {

  const [pics, setPics] = useState([])
  const [page, setPage] = useState(1)

  async function getData() {
    const reponce = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    setPics(reponce.data)
  }

  useEffect(() => {
    getData()
  }, [])

  function previousPage() {

    if (page > 1) {
      setPage(page - 1)
      getData()
    }
    else {
      setPage(1)
      getData()
    }
  }

  function nextPage() {

    if (pics.length > 1) {
      setPage(page + 1)
      getData()
    }
  }



  return (
    <div className="bg-black w-full h-screen text-white p-5 overflow-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Gallery</h1>
     
      <Cart pics={pics} />
      <div className="flex justify-center gap-5 mt-10">
        <button onClick={previousPage} className="bg-red-600 p-3 active:scale-95 font-bold cursor-pointer rounded-lg hover:bg-red-700 transition-all mb-5">Previous</button>
         <div className="font-bold rounded-lg mt-3">Page {page}</div>
        <button onClick={nextPage} className="bg-red-600 p-3 active:scale-95 font-bold cursor-pointer rounded-lg hover:bg-red-700 transition-all mb-5">Next</button>
      </div>
    </div>
  )
}

export default App