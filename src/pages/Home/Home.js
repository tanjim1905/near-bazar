import React from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Features />
            <Categories />
            <Products />
            <Footer />
        </>
    );
};

export default Home;