import React, {useContext} from "react";
import ImgCartWidget from '../Imagenes/CartWidget.png'
import { GlobalContext } from "../../context/GlobalProvider";

const style = {
    display: `flex`,
    justifyContent: `flex-end`,
    paddingRight: 30,
    fontSize: 25,
    
  };

const CartWidget = () =>{
  const {contadorDeProductos} = useContext (GlobalContext)
return (
    //  d-flex flex-row-reverse Pone todo al costado derecho
    //  Ver si se puede usar justifi content 
    <div className="navbar-collapse" style = {contadorDeProductos === 0 ? {visibility:"hidden"} : style} >
    <img src={ImgCartWidget}  className="d-inline-block " style={{paddingRight: 10}} alt="changuito"/>
    <p id ="cantidaDeProductos"> {contadorDeProductos}</p> 
    </div>
    );
};

export default CartWidget;