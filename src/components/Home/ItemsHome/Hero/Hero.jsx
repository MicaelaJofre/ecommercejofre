import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {

    const slideShow = useRef(null);

    //boton de siguiente
    const after = () => {

        if (slideShow.current.children.length > 0) {
            //obtenemos el primer elemento
            const firstItem = slideShow.current.children[0];

            //sacamos el tamaño del slide
            const widthSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transition = '1000ms ease-out all';
            slideShow.current.style.transform = `translateX(-${widthSlide}px)`;

            const transition = () => {
                
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = 'translateX(0)';

                //tomamos el primer elemento y lo mandamos al final
                slideShow.current.appendChild(firstItem);
                //borramos el eventListener
                slideShow.current.removeEventListener('transitionend', transition);
            }

            // eventListener para cuando termine la animación
            slideShow.current.addEventListener('transitionend', transition);
        }
    }

    //boton anterior
    const previous = () => {
        
        if (slideShow.current.children.length > 0) {
            
            //identificamos el último elemento
            const index = slideShow.current.children.length - 1;
            const lastItem = slideShow.current.children[index];

            slideShow.current.insertBefore(lastItem, slideShow.current.firstChild);

            //sacamos el tamaño del slide
            const widthSlide = slideShow.current.children[0].offsetWidth; 

            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(-${widthSlide}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = '1000ms ease-out all';
                slideShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }
    

    return (
        <section className='carousel'>
            <article className="containerSlide" ref={slideShow}>
                <div className='slide'>
                    <img src={process.env.PUBLIC_URL + "/assets/image/decoHeader1.jpeg"} alt='deco'/>
                    <div className='textSlide'>
                        <p className="legend">Deco</p>
                    </div>
                </div>
                <div className='slide'>
                    <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader2.jpeg'} alt='hogar' />
                    <div className='textSlide'>
                        <p className="legend">Hogar</p>
                    </div>
                </div>
                <div className='slide'>
                    <img src={process.env.PUBLIC_URL + "/assets/image/decoHeader3.jpeg"} alt='asesoramiento personalizado' />
                    <div className='textSlide'>
                        <p className="legend">Asesoramiento personalizado</p>
                    </div>
                </div>
            </article>

            <div className='controlsButton'>
                <button className='buttonLeft' onClick={previous}>
                    <i><FontAwesomeIcon icon={faChevronLeft} /></i>
                </button>
                <button className='buttonRigth' onClick={after}>
                    <i><FontAwesomeIcon icon={faChevronRight} /></i>
                </button>
            </div>

        </section>
    )
}

export { Hero }