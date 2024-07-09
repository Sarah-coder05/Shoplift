import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import CartPage from './component/cart-page';
import Order from './component/order';
import ProductPage from './component/product-page';
import TopPage from './component/top-page';

function App() {
  return (
    <>
     <TopPage /> 
     <ProductPage />
     <CartPage />
     <Order />
    </>
  );
}

export default App;
