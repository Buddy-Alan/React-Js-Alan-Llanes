import React, {useState, useEffect} from "react";
import ItemList from "../itemList/itemList";
import getItems from '../../getItems'
import product from '../../JSONS/product.json'

const ItemListContainer = ({categoria}) => {

    const [productosNuevo, setProductos] = useState([])


    getItems(useEffect,product.TodosLosProducts,setProductos)

    return(
    <div className="row">
        <ItemList items = {productosNuevo} categoryItems = {categoria} />
    </div>
    );

}
export default ItemListContainer;

