import React ,{useContext} from 'react';
import { GlobalContext } from '../../context/GlobalProvider'
import tachoBasura from '../Imagenes/tachoBasura.png'
const imagenesProductos = require.context('../Imagenes/', true);


const styleImg =
 {
   width:"4rem",
   height: "4rem"  
 }
const   styleButton = {
   paddingY: ".25rem",
   paddingX: ".5rem",
   fontSize: ".85rem"
}
  



const CartView = ({productCart}) => {

 const {removeItems} = useContext(GlobalContext);
         const {id,title,price,contador,pictureURL} = productCart;
         return (
            <tr>
            <td> <img src= {imagenesProductos(pictureURL)} alt={`${title}`}  style={styleImg}/></td> 
            <td>{title}</td>
            <td>{contador}</td>
            <td><button className="btn btn-outline-primary btn-sm" style={styleButton} onClick= {() => removeItems(id)}>
               <img src={tachoBasura} alt=""/>
               </button></td>
            <td> ${price * contador}</td>
            </tr>
         )
      }
   


export default CartView