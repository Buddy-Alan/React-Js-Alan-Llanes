import React, {useState, useContext} from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import Swal from "sweetalert2";

const alertaDeFaltanteDeProductos = ()  => {
    Swal.fire({
        icon: 'error',
        title: 'No Hay Suficientes items para la compra',
      })
}


const styleBotonSumaYResta = {
    display: `flex`,
    flexWrap: `nowrap`,
    justifyContent:"center", 
    alignItems:"center",
    border: 10
  }
  const styleContador = {
    paddingRight: 30,
    paddingLeft: 30,
  }
  const botones = 
    {
        display: `grid`,
        paddingRight: 5,
        paddingLeft: 5
     }

     const botonAgregar =
     {  
        paddingTop: 5,
        paddingLeft: 5
     }


const ItemCount = ({stockDelProducto, initial,productoCompleto,onAdd}) =>
        { 
            const {id,title,price,pictureURL} = productoCompleto
            const {cartCount,setCartCount, addCart }   = useContext(GlobalContext);
            const [contador, setContador] = useState(initial);
            const [stockInicial, setStockInicial] = useState(stockDelProducto);
            return(
                
                <div style= {{width: 150, height: 130}}>
                    
                    <div className="carrito">
                    </div>
                    <div style= {botones}>
                    <div style = {styleBotonSumaYResta} >
                    <button className="resta btn btn-outline-secondary btn-sm" style={{height:30}} onClick={  () => contador > 0  ? setContador ( contador - 1): ""}>-</button>
                        <h3 style = {styleContador}> {contador}</h3>
                        <button className="suma btn btn-outline-secondary btn-sm" style={{height:30} } onClick={() => contador < stockInicial  ? setContador( contador + 1):""}>+</button>               
                    </div>
                    <div style={botonAgregar}>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={ onAdd = () => {
                        if ( stockInicial >= contador ){
                            setCartCount (cartCount + contador)
                            setStockInicial ( stockInicial - contador)
                            addCart ({id,title,price,pictureURL,contador})
                                }
                                else 
                                {
                                    alertaDeFaltanteDeProductos()
                                }
                        }
                    }>Agregar al Carrito</button>
                    </div>
                    </div>
                    
                </div>
            )
        };


export  default ItemCount;