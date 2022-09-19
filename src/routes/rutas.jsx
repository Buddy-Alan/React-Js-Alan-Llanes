import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../Component/navBar/navBar'
import ItemListContainer from '../Component/itemListContainer/itemListContainer'
import ItemDetailCointainer from '../Component/ItemDetailCointainer/ItemDetailCointainer'
import Cart from '../Component/Cart/cart'
import Home from "../Component/Home/home"
import Formulario from '../Component/Form/Formulario'


const Rutas = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/componentes-de-pc" element= {<ItemListContainer categoria = {1} />} />
                <Route path="/componentes-de-pc/:id" element= {<ItemDetailCointainer/>} /> 
                <Route path="/almacenamiento" element= {<ItemListContainer categoria={2}/>} />
                <Route path="/perifericos" element= {<ItemListContainer categoria={3}/>} />
                <Route path="/formDeCompra" element ={<Formulario/>}/>
                <Route path="/cart" element= {<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas