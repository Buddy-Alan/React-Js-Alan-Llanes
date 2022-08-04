import React from "react";
import Changuito from '../Imagenes/Changuito.png'

const style = {
    display: `flex`,
    justifyContent: `flex-end`,
    paddingRight: 30,
    fontSize: 25
  };

const cartWidget = () =>{
return (
    //  d-flex flex-row-reverse Pone todo al costado derecho
    //  Ver si se puede usar justifi content 
    <div className="navbar-collapse" style = {style} >
    <img src={Changuito}  className="d-inline-block " style={{paddingRight: 10}} alt="changuito"/>
    <p id ="cantidaDeProductos">0</p> 
    </div>
    );
};

export default cartWidget;