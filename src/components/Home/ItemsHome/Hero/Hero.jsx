import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Hero.css';

export class Hero extends Component {
    render() {
        return (
            <Carousel className='carousel'>
                <div>
                    <img src={process.env.PUBLIC_URL + "/assets/image/decoHeader1.jpg"}  />
                    <p className="legend">Deco</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/assets/image/decoHeader2.png"} />
                    <p className="legend">Hogar</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader3.png'} />
                    <p className="legend">Asesoramiento personalizado</p>
                </div>
            </Carousel>
        );
    }
};