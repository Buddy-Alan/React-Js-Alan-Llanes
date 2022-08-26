import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../Component/navBar/navBar'
import ItemListContainer from '../Component/itemListContainer/itemListContainer'
import ItemDetailCointainer from '../Component/ItemDetailCointainer/ItemDetailCointainer'

const Rutas = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
                <Route path="/" element= {<ItemListContainer/>} />
                <Route path="/componentes-de-pc" element= {<ItemListContainer/>} />
                <Route path="/componentes-de-pc/:id" element= {<ItemDetailCointainer/>} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas