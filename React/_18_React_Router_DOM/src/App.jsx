import { Routes, Route } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from "./pages/NavBar";
const App = () => {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App