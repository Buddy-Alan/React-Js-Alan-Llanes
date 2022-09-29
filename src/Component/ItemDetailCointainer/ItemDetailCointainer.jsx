import React, {useContext} from "react";
import { useParams } from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails";
import {GlobalContext} from "../../context/GlobalProvider";
import Spinner from "../Spinner/Spinner";



const ItemDetailCointainer = () => 

{
    const params = useParams ();

    const {productosNuevo,loading} = useContext(GlobalContext)

    return(
            loading ? <Spinner/> :
            productosNuevo.filter((item) => item.id == params.id).map((item,index) => (

               <ItemDetails key = {index} detallesProducto={item}/>
        
            ))
            
    );

}

export default ItemDetailCointainer