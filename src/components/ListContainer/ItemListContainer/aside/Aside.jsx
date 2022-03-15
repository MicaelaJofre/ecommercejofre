import React from 'react';

const Aside = () => {
    return (
        <>
            <h1>Decoración</h1>
            <p>10 resultados</p>
            <form className='formAsideDeco' action="">
                <div>
                    <legend>Categorías</legend>
                    <div>

                        <label><input type='checkbox' />Jarrones y floreros</label>
                    </div>
                    <div>
                        <label><input type='checkbox' />Adornos</label>
                    </div>
                    <div>
                        <label><input type='checkbox' />Organizadores</label>
                    </div>
                    <div>
                        <label><input type='checkbox' />Espejos</label>
                    </div>
                </div>
                <div>
                    <div>
                        <legend>Envío</legend>
                        <label><input type='checkbox' />Envío gratis</label>
                    </div>
                </div>
                <div>
                    <legend>Precio</legend>
                    <div>
                        <label><input type='checkbox' />Hasta $1000</label>
                    </div>
                    <div>
                        <label><input type='checkbox' />$1000 a $2000</label>
                    </div>
                    <div>
                        <label><input type='checkbox' />Más de $2000</label>
                    </div>
                </div>
            </form>
        </>
    )
}

export { Aside }