import React,{useContext, CSSProperties} from "react";
import ItemList from "../itemList/itemList";
import { GlobalContext } from "../../context/GlobalProvider";
import Spinner from "../Spinner/Spinner";




const ItemListContainer = ({categoria}) => {

    const {productosNuevo,loading} = useContext(GlobalContext);
    return(
        <div style={{overflow: "hidden"}} >
    <div className="row" >
         {loading ? <Spinner/> :<ItemList items = {productosNuevo} categoryItems = {categoria} />}
    </div>
    </div>
    );

}
export default ItemListContainer;

