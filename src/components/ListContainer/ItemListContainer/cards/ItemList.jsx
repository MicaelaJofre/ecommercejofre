import { Items } from "./Items";
import "../ItemListContainer.css";



const ItemList = ({ onAdd, prods }) => {
    
    return (
        <div className='cardsContainer' >
            {prods.map(prod => <Items key={prod.id} prod={prod} onAdd={onAdd} />)}
        </div>

    )
}
export { ItemList }