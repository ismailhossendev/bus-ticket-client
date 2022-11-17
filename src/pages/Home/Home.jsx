import React from 'react';
import Hero from '../../components/Hero';
import Offer from './Offer';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <Offer />
        </div>
    );
};

export default Home;