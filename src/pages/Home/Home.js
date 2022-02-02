import React from 'react';
import AppStore from '../../components/AppStore/AppStore';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Offer from '../../components/Offer/Offer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <Categories />
            <Products />
            <Offer />
            <AppStore />
        </>
    );
};

export default Home;