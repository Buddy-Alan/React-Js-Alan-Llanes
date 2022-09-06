import React ,{useContext} from 'react';
import { GlobalContext } from '../../context/GlobalProvider'
const imagenesProductos = require.context('../Imagenes/', true);

const styleImg = {
   width: "8rem",
   height: 100,
   paddingLeft: 10
}
const styleCard = {
   paddingBottom: 5,
   paddingLeft: 10,
   paddingRight: 30
  }
const   styleButton = {
   paddingY: ".25rem",
   paddingX: ".5rem",
   fontSize: ".85rem"
}
  



const ProductCarrito = ({productCart}) => {

 const {removeItems} = useContext(GlobalContext);
         const {id,title,price,pictureURL,category,contador} = productCart;
         return (
            <div className={`col ${category}`} id ={id} style={styleCard}>
            <div className= {`card ${title}`} style={{width: "10rem"}} >
            <img className="card-img-top"  style={styleImg} src= {imagenesProductos(`${pictureURL}`)}  alt={title}/>
            <div className="card-body" >
            <b><h7 className="card-title"  >{title}</h7></b>
            <p className="card-text"  > $ {price} </p>
            <p className="card-text" >Cantidad: {contador}</p>
            <button className="btn btn-primary btn-sm" style={styleButton} onClick= {() => removeItems(id)}>Eliminar Producto</button>
            </div>
            </div>
            </div>
      
         )
      }
   


export default ProductCarrito