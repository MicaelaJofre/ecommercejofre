import React from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {


    const [item, setItem] = useState({});

    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    //promesa
    useEffect(() => {

        window.scrollTo(0, 0);
        
        const db = getFirestore();
        const queryDb = doc(db, 'items', detailId);
        
        getDoc(queryDb)
            .then(res => {
                setItem({ id: res.id, ...res.data() })
            })
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