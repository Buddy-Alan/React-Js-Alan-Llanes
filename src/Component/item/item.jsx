 import React from 'react'
 
 const item = ({item}) => {


    const {id,title,price,pictureURL} = item;
   return (

      <div className='col'>
      <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src= {pictureURL}  alt={title}/>
      <div className="card-body" id ={id}>
      <h5 className="card-title {title}"   >{title}</h5>
      <p className="card-text {price}" > $ {price} </p>
      <a href="#" className="btn btn-primary">Mas Info del Porducto</a>
      </div>
      </div>
      </div>

   )
 }
 
 export default item