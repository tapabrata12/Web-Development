import { useState } from "react"
import axios from 'axios'

const App = () => {

  const [pics, setPics] = useState([])

  async function getData() {
    const reponce = await axios.get("https://picsum.photos/v2/list?page=3&limit=100")
    setPics(reponce.data)
    console.log(pics)
  }


  let isimg = "No pictures avaliable"
  if (pics.length > 0) {

    isimg = pics.map((elem, idx) => {
      return <a href={elem.url} target="_blank">

        <div className="w-60 h-60 rounded-xl overflow-hidden" key={idx}>
          <img className="w-full h-9/10 object-cover" src={elem.download_url} />
          <p className="text-center font-bold text-xl ">{elem.author}</p>
        </div>

      </a>
    })

  }

  return (
    <div className="bg-black w-full h-screen text-white p-5 overflow-auto">

      <button onClick={getData} className="bg-red-600 p-3 active:scale-95 cursor-pointer rounded-lg hover:bg-red-700 transition-all mb-5">Get Pictures</button>

      <div className="flex flex-wrap gap-2">{isimg}</div>

    </div>
  )
}

export default App