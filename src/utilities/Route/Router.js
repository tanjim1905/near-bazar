import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
import About from '../../pages/About/About';
import Login from '../../pages/Authentication/Login/Login';
import Register from '../../pages/Authentication/Register/Register';
import Contact from '../../pages/Contact/Contact';
import '../../pages/Home/Home';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import Shop from '../../pages/Shop/Shop';


const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/nav" element={<Nav />} />
            </Routes>
            <Footer />
        </>

    );
};

export default Router;