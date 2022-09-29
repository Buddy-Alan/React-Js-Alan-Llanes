import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalProvider';
import {Link} from 'react-router-dom';
import CartView from './cartView';

const   styleButton = {
  paddingY: ".25rem",
  paddingX: ".5rem",
  fontSize: ".85rem"
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
            <th>Imagen</th>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Acción</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
              productInCart.map ((item,index) =>
              <CartView key = {index} productCart={item} />
              )
          }
        </tbody>
        <tfoot>
        <tr>
        <td></td>
        <th scope='col'>Total productos</th>
        <td>{contadorDeProductos}</td>
        <td><button className="btn btn-danger btn-sm" onClick={resetCart}> Vaciar Carrito</button> </td>
        <td> ${contadorDePrecioTotal}</td>
        </tr>
        </tfoot>
      </table>
      <div className= "align-self-end" style={{paddingBottom: 5}}>
      <Link to={`/`} className="btn btn-primary " style={{marginRight: 10}}> Seguir Comprando</Link>
      <Link to={`/formDeCompra`} className="btn btn-success " style={{marginRight: 10}}> Finalizar Compra</Link>
    
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