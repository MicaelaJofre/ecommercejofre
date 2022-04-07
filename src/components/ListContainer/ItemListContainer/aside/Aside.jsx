import React from 'react';

const Aside = ({prods,
                setSubcategory,
                subcategory,
                setShippingFilter,
                setPriceFilter,
                shippingFilter,
                priceFilter }) => {


    // filtrar subcategoria
    const subcate = prods.map(prod => prod.sub_category);

    const result = subcate.filter((item, index) => subcate.indexOf(item) === index);
    
    //filtrar por checkbox
    
    const filterCheckbox = ((e)=> {
        let {name} = e.target;
        let currentFilters = [...subcategory];

        e.target.checked
                ? currentFilters = [name, ...currentFilters]
                : currentFilters = currentFilters.filter(x => x !== name);
        
        setSubcategory(currentFilters);
    });
    
    // filtrar checkbox envio gratis

    const checkShipping = (e) => setShippingFilter(e.target.checked);

    // filtrar por precio
    
    const handlePrice = (e) => setPriceFilter(e.target.value);
    
    
    return (
        <>
            {
                prods.length === 33
                            ?<h1>Productos lima</h1>
                            : <>
                                <h1>{prods[0].category}</h1>
                                <p>{prods.length} resultados</p>
                            </>
            }
            <form className='formAsideDeco' action="">
                <div>
                    <legend>Categorías</legend>
                    {result.map((prod) => {
                        return (
                            <div key={prod}>
                                <label><input
                                    type='checkbox'
                                    name={prod}
                                    value='false'
                                    onChange={filterCheckbox}/>
                                    {prod}</label>
                            </div>
                        )

                    })}

                </div>
                <div>
                    <div>
                        <legend>Envío</legend>
                        <label><input
                            className="only-one"
                            type='checkbox'
                            checked={shippingFilter}
                            onChange={checkShipping}
                        />Envío gratis</label>
                    </div>
                </div>
                <div>
                    <legend>Precio</legend>
                    <div>
                        <label><input
                            type='radio'
                            name='price'
                            value='0'
                            checked={priceFilter === '0' ? true : false }
                            id='price0'
                            onChange={handlePrice}
                        />Mostrar todos</label>
                    </div>
                    <div>
                        <label><input
                            className="only-one"
                            type='radio'
                            name='price'
                            value='1'
                            id='price1'
                            onChange={handlePrice}
                        />Hasta $1000</label>
                    </div>
                    <div>
                        <label><input
                            className="only-one"
                            type='radio'
                            name='price'
                            value='2'
                            id='price2'
                            onChange={handlePrice}
                        />$1000 a $2000</label>
                    </div>
                    <div>
                        <label><input
                            type='radio'
                            name='price'
                            value='3'
                            id='price3'
                            onChange={handlePrice}
                        />Más de $2000</label>
                    </div>
                </div>
            </form>
        </>

    )
}

export { Aside }