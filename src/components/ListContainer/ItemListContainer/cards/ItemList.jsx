import React from 'react';
import { Items } from "./Items";
import "../ItemListContainer.css";
import { memo } from 'react';



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