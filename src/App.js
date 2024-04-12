import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import About from "./Component/About";
import Product from "./Component/Product";
import Contact from "./Component/Contact";
import AdminHome from "./Component/Admin/AdminHome";
import CreateProduct from "./Component/Admin/Product/CreateProduct";
import AdminProduct from "./Component/Admin/Product/AdminProduct";
import UpdateProduct from "./Component/Admin/Product/UpdateProduct";
import SinglePageProduct from "./Component/SinglePageProduct";
import PagenotFound from "./Component/PagenotFound";

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={< Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:_id" element={<SinglePageProduct />} />
          <Route path="/*" element={<PagenotFound />} />

          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/editproduct/:_id" element={<UpdateProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
