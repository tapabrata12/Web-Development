import {Routes, Route} from 'react-router-dom'
import Feed from './pages/Feed'
import CreatePost from './pages/CreatePost'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
    </Routes>
    </>
  )
}

export default App