import axios from 'axios';
import { useState } from 'react';
const App = () => {
  const [data, setdata] = useState([])
  async function apiRunFetch() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(responce);
    const data = await responce.json()
    console.log(data);
  }

  async function apiRunAxios() {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    // console.log(responce.data);
    console.log(responce.data);
    
  }

  async function apiPics() {
    const responce = await axios.get('https://picsum.photos/v2/list')
    setdata(responce.data)
    
  }
  return (
    <div>
      <button onClick={apiRunFetch}>Call API by Fetch</button>
      <button onClick={apiRunAxios}>Call API by Axios</button>
      <button onClick={apiPics}>Get Pictures</button>

      {data.map((elem,idx)=>{
        return <h1 key={idx}>{idx+1}:{elem.author}</h1>
      })}

    </div>
  )
}

export default App