import React from 'react';
import Banner from '../Banner/Banner';
import Quotes from '../Quotes/Quotes';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            <Services></Services>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;