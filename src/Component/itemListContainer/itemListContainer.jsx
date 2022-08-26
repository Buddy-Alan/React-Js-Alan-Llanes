import React, {useState, useEffect} from "react";
import ItemList from "../itemList/itemList";
import getItems from '../../getItems'
import product from '../../JSONS/product.json'

const ItemListContainer = () => {

    const [productosNuevo, setProductos] = useState([])


    getItems(useEffect,product.TodosLosProducts,setProductos)


    return(
        <div className="row">
    <ItemList items = {productosNuevo}/>
    </div>
    );

}
export default ItemListContainer;

