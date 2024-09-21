import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/category/Category";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Contact from './Pages/Contact';
import Termsofservice from './Pages/temsofservice';
import Privacy from './Pages/Privacy';
import Gaberlly from "./Pages/Gaberlly"
import About from "./Pages/About"
import Elegant from "./Pages/elegent"
import Contem from "./Pages/Contemporary"
import Blog from "./Pages/Blog"
import Feedback from "./Pages/Feedback";
import Sitemap from "./Component/sitemap";



function App() {
  //add cart
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (!ProductExits) {
      setCartItems([...cartItems, { ...product}]);
      alert("Add Wishlist Success!");
    } else {
      alert("Product already exist in Wishlist!");
    }
   
  };

  const deleteCart = (GFGCourse) => {
    const updatedCart = cartItems.filter((item) => item.id !== GFGCourse.id);
    setCartItems(updatedCart);
    alert("Delete Wishlist success!");
  };

  return (
    <div>
      <BrowserRouter>
        <Header number={cartItems.length} />
        <Menu />

        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route
            path="/category"
            element={<Category />}
          />
          <Route
            path="/category/:key"
            element={<Category handleAdd={handleAdd} />}
          />
          <Route path="/detail/:id" element={<Detail handleAdd={handleAdd}/>} />
          <Route
            path="/wishlist"
            element={<Cart cartItems={cartItems} deleteCart={deleteCart} />}
          />
          <Route path='/contact' element={<Contact />} />
          <Route path='/term' element={<Termsofservice />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/gallery' element={<Gaberlly/>} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/elegant' element={<Elegant />} />
          <Route path='/contem' element={<Contem />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/sitemap' element={<Sitemap />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
