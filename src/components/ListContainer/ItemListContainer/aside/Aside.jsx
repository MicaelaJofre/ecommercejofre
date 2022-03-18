import {useState} from 'react';

const Aside = ({ prods, setSubcategory, subcategory }) => {


    // filtrar subcategoria
    const subcate = prods.map(prod => prod.sub_category);

    const result = subcate.filter((item, index) => {
        return subcate.indexOf(item) === index;
    })

    //filtrar por checkbox
    
    const filterCheckbox = ((e)=> {
        let {name} = e.target;
        let currentFilters = [...subcategory];

        if (e.target.checked) {
            currentFilters = [name, ...currentFilters]
        } else {
            currentFilters = currentFilters.filter(x=> x != name)
        }
        setSubcategory(currentFilters)
    });
    
    
    return (
        <>
            <h1>{prods[0].category}</h1>
            <p>{prods.length} resultados</p>
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
                                    onChange={filterCheckbox}
                                    />{prod}</label>
                            </div>
                        )

                    })}

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