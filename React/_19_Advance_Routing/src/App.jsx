import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './components/Error';
import Men from './pages/Men';
import Women from './pages/Women';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>

          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App