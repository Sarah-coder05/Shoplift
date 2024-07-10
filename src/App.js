import './App.css';
import { Route, Routes } from "react-router-dom"
import CartPage from './component/cart-page';
import Order from './component/order';
import ProductPage from './component/product-page';
import TopPage from './component/top-page';
import Otp from './component/otp';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={  <TopPage /> } />
      <Route path="/product" element={  <ProductPage /> } />
      <Route path="/cart" element={  <CartPage /> } />
      <Route path="/order" element={  <Order /> } />
      <Route path="/otp" element={  <Otp/>} />
     </Routes>
    </>
  );
}

export default App;
