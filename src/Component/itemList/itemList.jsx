import React from 'react';
import Item from '../item/item';
const imagenesProductos = require.context('../Imagenes/', true);

const itemList = ({items}) => {

  return (
    items.map ((product,index) =>   (
        <Item key ={index} item = {product}/>
    )
    ) 
  )
}

export default itemList