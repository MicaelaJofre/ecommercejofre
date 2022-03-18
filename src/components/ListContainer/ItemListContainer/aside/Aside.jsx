import {useState} from 'react';

const Aside = ({ prods, setSubcategory }) => {


    // filtrar subcategoria
    const subCategory = prods.map(prod => prod.sub_category);

    const result = subCategory.filter((item, index) => {
        return subCategory.indexOf(item) === index;
    })

    //filtrar por checkbox
    // colocar todos como falsos los checkbox
    /* const [checkedState, setCheckedState] = useState(
        new Array(result.length).fill(false)
    );
 */
    //funcion para recorrer los checkbox 
    /* const filterCheckbox = (position) => {

        const updatedCheckedState = checkedState.map((item, index) =>{
            index === position ? !item : item
        });
        setCheckedState(updatedCheckedState)
    }  */
    
   /*  const filterCheckbox = ((e)=> {
        let { name, value } = e.target;
        let opciones = [...result];
        let indice = opciones.findIndex(x => x === name);
        opciones[indice].check = !opciones[indice].check;
    });
    setSubcategory ( indice)
    } */
    
    return (
        <>
            <h1>{prods[0].category}</h1>
            <p>{prods.length} resultados</p>
            <form className='formAsideDeco' action="">
                <div>
                    <legend>Categorías</legend>
                    {result.map((prod, index) => {
                        return (
                            <div key={index}>
                                <label><input
                                    type='checkbox'
                                    name={prod}
                                    value='false'/* 
                                    onChange={() =>  filterCheckbox(e)}
                                    checked={checkedState[index]} */
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