import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Contact from './component/Contact';
import EachProduct from './component/EachProduct';
import CartBtn from './component/buttons/CartBtn';
import About from './component/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/products" Component={Products}/>
          <Route exact path="/products/:id" Component={EachProduct}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/cart" Component={CartBtn} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;