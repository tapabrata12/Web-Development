import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
const CourseDetail = () => {

    const { id } = useParams();

    return (
        <>
            <NavBar />
            <NavBar2 />
            <h1 className='text-9xl font-bold flex items-center justify-center h-[95%]'>{id}</h1>
            <Footer />
        </>
    )
}

export default CourseDetail