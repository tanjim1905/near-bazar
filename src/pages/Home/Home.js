import React from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Header from '../../components/Shared/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Features />
            <Categories />
        </>
    );
};

export default Home;