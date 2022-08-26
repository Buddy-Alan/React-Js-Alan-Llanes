import React, {useState} from "react";


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


const ItemCount = ({stock, initial,nameProducto,onAdd}) =>
        { 
            const [contador, setContador] = useState(initial);
            const [titulo, setTitulo] = useState(nameProducto);
            const [stockInicial, setStockInicial] = useState(stock);
            return(
                
                <div style= {{width: 150, height: 130}}>
                    
                    <div className="carrito">
                    </div>
                    <h3>{titulo}</h3>
                    <div style= {botones}>
                    <div style = {styleBotonSumaYResta} >
                    <button className="resta btn btn-outline-secondary btn-sm" style={{height:30}} onClick={  () => contador > 0  ? setContador ( contador - 1): ""}>-</button>
                        <h3 style = {styleContador}> {contador}</h3>
                        <button className="suma btn btn-outline-secondary btn-sm" style={{height:30} } onClick={() => contador < stockInicial  ? setContador( contador + 1):""}>+</button>               
                    </div>
                    <div style={botonAgregar}>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={ onAdd = () => {
                        
                        if ( stockInicial >= contador ){
                            console.log(`Usted Agrego al carrito:  ${contador} ${titulo}`)
                            setStockInicial ( stockInicial - contador)
                                }
                                else {
                                    (console.log ("No hay suficientes productos para la compra"))
                                }
                            
                        }

                    }>Agregar al Carrito</button>
                    
                    </div>
                    </div>
                </div>
            )
        };


export  default ItemCount;