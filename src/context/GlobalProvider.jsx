import React,{createContext,useState,useEffect} from 'react'
import getItemFirestore from '../getItemsFirestore'

export  const GlobalContext = createContext (); 

const GlobalProvider = ({children}) => {
    const [cartCount, setCartCount] = useState (0);
    const [productInCart, setProductInCart] = useState ([])
    const [productosNuevo, setProductos] = useState([])

    setTimeout( getItemFirestore (useEffect,"products",setProductos),2000)


    const isInCart =  (itemID) =>
    {
      if  (productInCart.find((item) => item.id === itemID.id  ))
        {
          return (true)
        }
        else
        {
          return (false)
        }
    }


    const addCart = (product) => {
      if (isInCart(product))
          {
            let index = productInCart.findIndex((item) => item.id === product.id)
            setProductInCart (...productInCart[index].contador += product.contador)
          }
        else {
          setProductInCart ([...productInCart,product])
        }

    }
    
    const contadorDeProductos = productInCart.reduce((acumulador,item) => {
        return acumulador = acumulador + item.contador
    },0)

    const contadorDePrecioTotal = productInCart.reduce((acumulador,item) => {
      return acumulador = acumulador + item.price*item.contador
  },0)

  
    const resetCart = ()=> setProductInCart ([])


    const removeItems =  (itemARemover) => {
      setProductInCart (productInCart.filter((element)=> element.id != itemARemover))

    }

    

  return (
    <GlobalContext.Provider value ={{
        cartCount,
        productInCart,
        contadorDeProductos,
        contadorDePrecioTotal,
        productosNuevo,                
        setCartCount,
        addCart,
        removeItems,
        resetCart,
        setProductInCart
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider