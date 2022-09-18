import React, {useContext} from "react";
import { useParams } from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails";
import {GlobalContext} from "../../context/GlobalProvider";


const ItemDetailCointainer = () => 

{
    const params = useParams ();

    const {productosNuevo} = useContext(GlobalContext)

    return(
            productosNuevo.filter((item) => item.id == params.id).map((item,index) => (

                <ItemDetails key = {index} detallesProducto={item}/>
        
            ))
    );

}

export default ItemDetailCointainer