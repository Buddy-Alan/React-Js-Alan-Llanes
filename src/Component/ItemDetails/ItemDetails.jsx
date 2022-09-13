import React from 'react';
import ItemCount from '../ItemCounts/ItemCounts'
const imagenesProductosDetalle = require.context('../Imagenes/', true);
// import Procesador from '../Imagenes/ProcesadorRyzen5.jpg'
const itemDetailsClass = {
  display: "flex",
  justifyContent:"center"
    }

const imgYContador = {
  display: "flex",
  justifyContent:" space-around",
  alignItems: "end"
}

const ItemDetails = ({detallesProducto}) => {


    const {id,title,price,pictureURL,description,stock,category} = detallesProducto;

    return (
      <div className={`row  ${category}`}>
      <div className='col'style={itemDetailsClass}>
      <div className= {`card ${title}`} id= {id}  style={{width: "48rem" } } >
      <div style={imgYContador}>
      <img className="card-img-top" style={{width: "18rem" } } src = {pictureURL}  alt={title}/>
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