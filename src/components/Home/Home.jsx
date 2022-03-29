import React from 'react'
import './Home.css';
import { Bannerinfo } from './ItemsHome/Bannerinfo/Bannerinfo';
import { Cards } from './ItemsHome/Cards/Cards';
import { Hero } from './ItemsHome/Hero/Hero';
import { Info } from './ItemsHome/Info/Info';
import { Promo } from './ItemsHome/Promo/Promo';

const Home = () => {
    return (
        <div className='containerHome'>
            <Hero />
            <Cards />
            <Promo />
            <Info />
            <Bannerinfo/>
        </div>
    )
}

export { Home }