
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './pages/card';
import ViewDetails from './pages/ViewDetails';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import ProductCreate from './admin/productCreate';
import ProductDetails from './admin/ProductDetails';
import ProductEdit from './admin/ProductEdit';
import CartPage from './pages/CartPage';
import ForgetPassword from './pages/ForgetPassword';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/category' element={<Category />} />
          <Route path='/viewDetails' element={<ViewDetails />} />
          <Route path='/card' element={<Card />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/productCreate' element={<ProductCreate />} />
          <Route path='/productDetails' element={<ProductDetails />} />
          <Route path='/productUpdate' element={<ProductEdit />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
        <ToastContainer/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
