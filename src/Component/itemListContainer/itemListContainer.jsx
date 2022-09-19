import React,{useContext} from "react";
import ItemList from "../itemList/itemList";
import { GlobalContext } from "../../context/GlobalProvider";




const ItemListContainer = ({categoria}) => {

    const {productosNuevo} = useContext(GlobalContext);
    return(
        <div style={{overflow: "hidden"}} >
    <div className="row" >
        <ItemList items = {productosNuevo} categoryItems = {categoria} />
    </div>
    </div>
    );

}
export default ItemListContainer;

