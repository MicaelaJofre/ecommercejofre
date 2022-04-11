import React, { memo } from 'react';
import { Items } from "./Items";
import "../ItemListContainer.css";



const ItemList = memo(
    ({ onAdd, prods }) => {

        return (
            <div className='cardsContainer' >
                {prods.map(prod => <Items key={prod.id} prod={prod} />)}
            </div>

        )
    }
)
export { ItemList }