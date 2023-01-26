import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/pages/Cart/cart'
import Books from './components/pages/Books/books';
import Navbar from './components/navbar/navbar';
import CartProvider from './store/cartProvider';


function App() {  
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/books" />} />
          <Route path='/books' element={<Books />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;