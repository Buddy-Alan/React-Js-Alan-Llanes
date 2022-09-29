 import React from 'react'
 import {Link} from 'react-router-dom';
 const imagenesProductos = require.context('../Imagenes/Productos', true);
 const styleCard = {
  paddingBottom: 5,
  display: "flex",
  alingItems:"center",
  justifyContent: "center"
 }

 const styleBoton = {
   position:"absolute",
   bottom:10
 }
 
 const item = ({item}) => { 
    const {id,title,price,pictureURL,category} = item;

   return (
      <div className={`col-md-4 col-xxl-3  col-sm-6 ${category}`}  style={styleCard}>
      <div className= {`card ${title}`} style={{width: "16rem", height: "25.3rem"}} >
      <img className="card-img-top" src= {imagenesProductos(pictureURL)}  style={{width: "15rem"}}  alt={title}/> 
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"> $ {price} </p>
      <div>
      <Link to={`${id}`} className="btn btn-primary" id = {id} style={styleBoton}>Mas Info del Porducto</Link>
      </div>
      </div>
      </div>
      </div>

   )
 }
 
 export default item