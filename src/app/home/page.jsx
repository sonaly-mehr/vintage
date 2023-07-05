import React from 'react';
import Instrument from '../components/home/Instrument';
import FeaturedInstrument from '../components/home/FeaturedInstrument';
import News from '../components/home/News';

const page = () => {
    return (
        <>
           <Instrument/>
           <FeaturedInstrument/>
           <News/>
        </>
    );
};

export default page;