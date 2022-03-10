import './ItemDetailContainer.css';
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { getFetchs } from "../../../helpers/getFetchs";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {


    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { detailId } = useParams();

    //promesa
    useEffect(() => {
        getFetchs
            .then((data) => {
                return data;
            })
            .then((data) => setItem(data.find(prod => prod.id === detailId)))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [detailId])

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