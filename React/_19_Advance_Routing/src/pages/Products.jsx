import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavBar2 from '../components/NavBar2';

const Products = () => {
  const location = useLocation();
  const isProductsHome = location.pathname === '/products';

  return (
    <>
      <NavBar />
      <NavBar2 />
      
      {isProductsHome && (
        <div className="flex justify-center items-center h-[95%] gap-5 text-4xl font-bold">
          <Link to="/products/men">Men's Section</Link>
          <Link to="/products/women">Women's Section</Link>
        </div>
      )}
      <Outlet />

      <Footer />
    </>
  )
}

export default Products