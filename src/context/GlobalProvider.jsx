import React,{createContext,useState,useEffect} from 'react'
import getItemFirestore from '../getItemsFirestore'

export  const GlobalContext = createContext (); 

const GlobalProvider = ({children}) => {
  // Se utiliza para sumar el contador de productos
    const [cartCount, setCartCount] = useState (0);
  // Se utiliza para agregar productos al carrito
    const [productInCart, setProductInCart] = useState ([])
  // Se utiliza para traer los productos de firebase
    const [productosNuevo, setProductos] = useState([])
    
    const [urlDeHome, setUrlDeHome] = useState()

    //funcion que trae los datos de firebase
    setTimeout( getItemFirestore (useEffect,"products",setProductos),2000)

 const ObtenerUrlDeHome = () =>{
  useEffect(() => {
    let URLactual = window.location;
    setUrlDeHome(URLactual)
    return () => {
      console.log (URLactual)
      console.log (urlDeHome)
    };
  },);
    }
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


    //Funcion para agregar los items al carrito, si el carrito ya tiene productos solo aumenta el contador dle mismo
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
    
    //Funcion que se utiliza para contar la cantidad de productos del carrito.
    const contadorDeProductos = productInCart.reduce((acumulador,item) => {
        return acumulador = acumulador + item.contador
    },0)

    //Funcion que se utiliza para contar el precio todal del carrito.
    const contadorDePrecioTotal = productInCart.reduce((acumulador,item) => {
      return acumulador = acumulador + item.price*item.contador
  },0)

    //Se utiliza para vaciar el carrito.
    const resetCart = ()=> setProductInCart ([])

    //Se utiliza para remover un item del carrito.
    const removeItems =  (itemARemover) => {
      setProductInCart (productInCart.filter((element)=> element.id !== itemARemover))

    }

    

  return (
    <GlobalContext.Provider value ={{
        cartCount,
        productInCart,
        contadorDeProductos,
        contadorDePrecioTotal,
        productosNuevo,
        urlDeHome,                
        setCartCount,
        addCart,
        removeItems,
        resetCart,
        setProductInCart,
        ObtenerUrlDeHome
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider