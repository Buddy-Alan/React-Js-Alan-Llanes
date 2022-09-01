import React,{createContext,useState} from 'react'

export  const GlobalContext = createContext (); 

const GlobalProvider = ({children}) => {
    const [productCart, setProductCart] = useState (0);

  return (
    <GlobalContext.Provider value ={{
        productCart,
        setProductCart,
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider