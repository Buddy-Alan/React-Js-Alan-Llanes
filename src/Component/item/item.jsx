 import React from 'react'
 import {Link} from 'react-router-dom';
 const imagenesProductos = require.context('../Imagenes/', true);
 
 const item = ({item}) => {
   
    const {id,title,price,pictureURL} = item;
   return (
      <div className='col'>
      <div className= {`card ${title}`} style={{width: "18rem"}} >
      <img className="card-img-top" src= {imagenesProductos(`${pictureURL}`)}  alt={title}/>
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