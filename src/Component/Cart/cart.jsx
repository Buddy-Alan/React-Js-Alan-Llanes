import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalProvider'

const Cart = () => {
    const {productCart} = useContext(GlobalContext); 
  return (
    <div>
        <p>Usted Tiene en el carrito {productCart} productos.</p>
    </div>
  )
}

export default Cart