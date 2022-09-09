import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalProvider';
import {Link} from 'react-router-dom';
import ProductCarrito from './productCarrito';

const   styleButton = {
  paddingY: ".25rem",
  paddingX: ".5rem",
  fontSize: ".85rem"
}

const botonFinalzarYSeguir = {

  justifyContent : "flexEnd",
  alingItems:"flexEnd",
  justifyItems: "flexEnd",
  alignContent: "flexEnd"
}


const Cart = () => {
    const {productInCart,resetCart, contadorDePrecioTotal,contadorDeProductos} = useContext(GlobalContext); 
  return (
    <div>
      {productInCart.length > 0 ?
      <>
      <h4> Su carrito de Compras es:  </h4>
        <div className='row'>
        <div className='col'>
        <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Acción</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          { 
              productInCart.map ((item,index) =>
              <ProductCarrito key = {index} productCart={item} />
              )
          }
        </tbody>
        <tfoot>
        <tr>
        <th scope='col'>Total productos</th>
        <td>{contadorDeProductos}</td>
        <td><button className="btn btn-danger btn-sm" onClick={resetCart}> Vaciar Carrito</button> </td>
        <td> ${contadorDePrecioTotal}</td>
        </tr>

        {/* <tr>
        <td><button className="btn btn-danger btn-sm"> Finalizar Compra</button> </td>
        </tr> */}

        </tfoot>
      </table>
      <div className= "align-self-end" >
      <Link to={`/`} className="btn btn-primary " style={{marginRight: 10}}> Seguir Comprando</Link> 
      <button className="btn btn-success "> Finalizar Compra</button> 
      </div>
      </div>
      </div>
      

      </> :
      <>
      <table className="table">
      <thead>
          <tr>
            <th style={{fontSize: "2rem"}}>Su Carrito Esta Vacio</th>
            <th> <Link to={`/`} className="btn btn-primary" style={{styleButton}}>Volver a la pantalla de Compras</Link></th>
          </tr>
        </thead>
          </table>
      </>  
    }
    </div>
  )
}

export default Cart