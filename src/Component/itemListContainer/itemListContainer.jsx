import React, {useState, useEffect} from "react";
import ItemList from "../itemList/itemList";
import getItemFirestore from '../../getItemsFirestore'



const ItemListContainer = ({categoria}) => {
    const [productosNuevo, setProductos] = useState([])
    setTimeout( getItemFirestore (useEffect,"products",setProductos),2000)

    return(
    <div className="row">
        <ItemList items = {productosNuevo} categoryItems = {categoria} />
    </div>
    );

}
export default ItemListContainer;

