import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalProvider';
import {Link} from 'react-router-dom';
import ProductCarrito from './productCarrito';



const Cart = () => {
    const {productInCart,resetCart, contadorDePrecioTotal} = useContext(GlobalContext); 
  return (
    <div>
      {productInCart.length > 0 ?
      <>
      <h1> Usted Sumo al Carrito: </h1>
        <div className='row' >
          { 
              productInCart.map ((item,index) =>
              <ProductCarrito key = {index} productCart={item} />
              )
          }
      </div>
      <button className="btn btn-danger" onClick={resetCart}> Borrar Contenido del Carrito</button>
      <p>Precio Total: {contadorDePrecioTotal} </p>
      </> :
      <>
      <h1>El Carrito Esta Vacio</h1>
      <Link to={`/`} className="btn btn-primary">Volver a la pantalla de Compras</Link>
     
      </>  
    }
    </div>
  )
}

export default Cart