 import React from 'react'
 import {Link} from 'react-router-dom';
 const imagenesProductos = require.context('../Imagenes/', true);
 const styleCard = {
  paddingBottom: 5
 }
 
 const item = ({item}) => { 
    const {id,title,price,pictureURL,category} = item;
   return (
      <div className={`col ${category}`}  style={styleCard}>
      <div className= {`card ${title}`} style={{width: "16rem"}} >
      <img className="card-img-top" src= {imagenesProductos(`${pictureURL}`)}  style={{width: "15rem"}}  alt={title}/>
      <div className="card-body" >
      <h5 className="card-title"  >{title}</h5>
      <p className="card-text"  > $ {price} </p>
      <Link to={`/componentes-de-pc/${id}`} className="btn btn-primary" id = {id}>Mas Info del Porducto</Link>
      </div>
      </div>
      </div>

   )
 }
 
 export default item