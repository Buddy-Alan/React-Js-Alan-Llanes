import React from 'react';
import ItemCount from '../ItemCounts/ItemCounts'
const imagenesProductosDetalle = require.context('../Imagenes/Productos', true);
const itemDetailsClass = {
  display: "flex",
  justifyContent:"center"
    }

const imgYContador = {
  display: "flex",
  justifyContent:" space-around",
  alignItems: "end"
}

const styleCard = {
  paddingBottom: "1em",
  paddingTop: "1em"
}

const ItemDetails = ({detallesProducto}) => {


    const {id,title,price,pictureURL,description,stock,category} = detallesProducto;

    return (
      <div className={`row  ${category}`} style = {styleCard}>
      <div className='col'style={itemDetailsClass}>
      <div className= {`card ${title}`} id= {id}  style={{width: "48rem" } } >
      <div style={imgYContador}>
      <img className="card-img-top" style={{width: "18rem" } } src = {imagenesProductosDetalle (pictureURL)}  alt={title}/>
      <div>
      <h5 className="card-title" >{title}</h5>
      <p className="card-text"> $ {price} </p>
      <p>Stock: {stock}</p>
      <ItemCount initial={1} stockDelProducto={stock} productoCompleto = {detallesProducto} />
      </div>
      </div>
      <div className="card-body" >
      <p>Caracteristicas del producto: </p>
        <ul>
          { 
            description.map ((item,index) => (
              <li key = {index}>
                  {item}
              </li>
            ))
          }
        </ul>
      </div>
      </div>
      </div>
      </div>
  )
}

export default ItemDetails