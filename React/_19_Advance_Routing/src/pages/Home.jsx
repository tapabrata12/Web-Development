import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBar2 from '../components/NavBar2';

const Home = () => {
  return (
    <>
    <NavBar />
    <NavBar2/>
    <h1 className='text-9xl font-bold flex items-center justify-center h-[95%]'>Home</h1>
    <Footer />
    </>
  )
}

export default Home