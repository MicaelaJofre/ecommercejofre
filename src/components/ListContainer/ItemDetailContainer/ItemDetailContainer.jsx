import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { getItems } from "../../../helpers/getFetchs";

const ItemDetailContainer = () => {


    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { detailId } = useParams();

    //promesa
    useEffect(() => {
        getItems
            .then((data) => setItem(data.find(prod => prod.id === detailId)))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='itemDetailContainer'>
            <section className='InfoItemContainer'>
                {
                    loading ? <div className="loader" id="loader"></div>
                        :
                        < ItemDetail  item={item} />
                }

            </section>
        </div>
    )
}

export { ItemDetailContainer }