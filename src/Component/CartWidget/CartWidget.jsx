import React, {useContext} from "react";
import ImgCartWidget from '../Imagenes/CartWidget.png'
import { GlobalContext } from "../../context/GlobalProvider";


const style = {
    display: `flex`,
    justifyContent: `flex-end`,
    paddingRight: 30,
    fontSize: 25,
  };

  const styleButtonCart = {
    display: "flex",
    flexWrap: "wrap",
    whight:"3rem",
     height : "3.5rem"
  }

  const styleImgCart =  {
    height : "2.5rem",
    paddingRight: 10
  }

  const styleCantidadCart = {
    fontSize:"1.5rem"
  }

const CartWidget = () =>{
  const {contadorDeProductos} = useContext (GlobalContext)
return (
    //  d-flex flex-row-reverse Pone todo al costado derecho
    //  Ver si se puede usar justifi content 
    <div className="navbar-collapse">
      <button type="button" className="btn btn-outline" style={styleButtonCart}><img src={ImgCartWidget} style={styleImgCart} alt="CartWidget"/>
    <p id ="cantidaDeProductos" style={styleCantidadCart}> {contadorDeProductos}</p> 
    </button>
    </div>
    );
};

export default CartWidget;