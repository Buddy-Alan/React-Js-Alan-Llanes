import React, {useState,useContext} from 'react'
import generarTickets from "../../generarTickets"
import { GlobalContext } from '../../context/GlobalProvider';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

const styleDivForm =  {
  display:"flex",
  flexWrap: "wrap",
  justifyContent: "center"
}
const styleInputForm = {
  padding: 10
}

const alertaDeFaltaDeItems =  () => {
    Swal.fire({
      icon: 'error',
      title: 'No Agrego ningun item al carrito',
      text: 'Por favor, agregue algun item antes de enviar el formulario'
       })
  
}

const Formulario = () => {
  const {productosNuevo, contadorDePrecioTotal,productInCart} = useContext(GlobalContext)

    const [formDate, setFormDate] = useState (
        {
            buyer: {
                email: "",
                nombre: "",
                apellido: "",
                telefono: ""
            },
            total: contadorDePrecioTotal,
            items: productInCart,
            date: new Date().toLocaleDateString()
        }
    )
    const {buyer: {email,nombre,apellido,telefono}} = formDate

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormDate ({
            ... formDate,
            buyer: {
                ... formDate.buyer,
                [name]: value,
            },

      });

    };


  return (
  <>

    <div className='row' style={styleDivForm}>
    <h2 style ={{textAlign:"center"}}>Complete el siguiente Formulario para Finalizar</h2>
    <form className='col-6' >
  <div className="form-group" style={styleInputForm}>
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" name="email" value = {email} className="form-control" id="exampleInputEmail1"  onChange={handleChange} minlength="6"  aria-describedby="emailHelp"  placeholder="Enter email" required />
  </div>
  <div className="form-group" style={styleInputForm}>
    <label for="exampleInputNombre">Nombre</label>
    <input  className="form-control"  type="text" name="nombre" value ={nombre} onChange={handleChange} minlength="2"  placeholder="Nombre" required/>
  </div>
  <div className="form-group" style={styleInputForm}>
    <label for="exampleInputApellido">Apellido</label>
    <input  className="form-control"  type="text" name="apellido" value ={apellido} onChange={handleChange} minlength="2"   placeholder="Apellido" required/>
  </div>
  <div className="form-group"style={styleInputForm}>
    <label for="exampleInputTelefono">Telefono</label>
    <input  className="form-control"  type="tel" name="telefono" value ={telefono} onChange={handleChange}   placeholder="Telefono" max="15" required/>
  </div>
  <div className ="col-12">
  <button type='button' class="btn btn-success" style={{margin: 10}} onClick={ () => productInCart.length > 0 ? generarTickets(formDate,productosNuevo): alertaDeFaltaDeItems()}>Solicitar Compra</button>
  <Link to={`/`} className="btn btn-primary " style={{marginRight: 10}}> Seguir Comprando</Link>
  </div>
</form>
</div>
</>
  )
}

export default Formulario