import React ,{useContext} from 'react';
import { GlobalContext } from '../../context/GlobalProvider'
import tachoBasura from '../Imagenes/tachoBasura.png'


const   styleButton = {
   paddingY: ".25rem",
   paddingX: ".5rem",
   fontSize: ".85rem"
}
  



const ProductCarrito = ({productCart}) => {

 const {removeItems} = useContext(GlobalContext);
         const {id,title,price,pictureURL,category,contador} = productCart;
         return (
            <tr>
            <td>{title}</td>
            <td>{contador}</td>
            <td><button className="btn btn-outline-primary btn-sm" style={styleButton} onClick= {() => removeItems(id)}>
               <img src={tachoBasura} alt=""/>
               </button></td>
            <td> ${price * contador}</td>
            </tr>
         )
      }
   


export default ProductCarrito