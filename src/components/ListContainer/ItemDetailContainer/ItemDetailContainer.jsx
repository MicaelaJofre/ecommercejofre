import './ItemDetailContainer.css';
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { getItem } from "../../../helpers/getFetchs";

const ItemDetailContainer = () => {


    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true)

    //promesa
    useEffect(() => {
        getItem
            .then((data) => {
                return data;
            })
            .then((data) => setItem(data))
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