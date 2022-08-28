import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import getItems from '../../getItems'
import product from '../../JSONS/product.json'
import ItemDetails from "../ItemDetails/ItemDetails";


const ItemDetailCointainer = () => 

{
    const params = useParams ();

    const [productosNuevo, setProductosNuevo] = useState([])

    getItems(useEffect,product.TodosLosProducts,setProductosNuevo)

    return(
            productosNuevo.filter((item) => item.id == params.id).map((item,index) => (

                <ItemDetails key = {index} detallesProducto={item}/>
        
            ))
    );

}

export default ItemDetailCointainer