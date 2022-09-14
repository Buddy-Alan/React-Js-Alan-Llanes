import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails";
import getItemFirestore from '../../getItemsFirestore'


const ItemDetailCointainer = () => 

{
    const params = useParams ();

    const [productosNuevo, setProductosNuevo] = useState([])

    setTimeout(getItemFirestore(useEffect,"products",setProductosNuevo),20000)

    return(
            productosNuevo.filter((item) => item.id == params.id).map((item,index) => (

                <ItemDetails key = {index} detallesProducto={item}/>
        
            ))
    );

}

export default ItemDetailCointainer