import React from 'react'
import { Bannerinfo } from './ItemsHome/Bannerinfo/Bannerinfo';
import { Cards } from './ItemsHome/Cards/Cards';
import { Hero } from './ItemsHome/Hero/Hero';
import { Info } from './ItemsHome/Info/Info';
import { SetProduct } from './ItemsHome/setProduct/SetProduct';
import { Promo } from './ItemsHome/Promo/Promo';
import './Home.css';

const Home = () => {

    window.scrollTo(0, 0);

    return (
        <div className='containerHome'>
            <Hero />
            <Cards />
            <SetProduct/>
            <Promo />
            <Info />
            <Bannerinfo/>
        </div>
    )
}

export { Home }