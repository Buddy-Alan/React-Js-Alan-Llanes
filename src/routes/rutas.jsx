import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../Component/navBar/navBar'
import ItemListContainer from '../Component/itemListContainer/itemListContainer'
import ItemDetailCointainer from '../Component/ItemDetailCointainer/ItemDetailCointainer'
import Cart from '../Component/Cart/cart'
import Home from "../Component/Home/home"


const Rutas = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/componentes-de-pc" element= {<ItemListContainer categoria = {1} />} />
                <Route path="/componentes-de-pc/:id" element= {<ItemDetailCointainer/>} /> 
                <Route path="/almacenamiento" element= {<ItemListContainer categoria={2}/>} />
                <Route path="/cart" element= {<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas