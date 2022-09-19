import React, {useContext} from 'react';
import imagen1 from '../Imagenes/Componentes.jpg';
import imagen2 from '../Imagenes/almacenamiento.jpg';
import home from '../Imagenes/home.jpg';
import {Link} from 'react-router-dom';
import ItemListContainer from '../itemListContainer/itemListContainer';
import { GlobalContext } from '../../context/GlobalProvider';


const styleImagenHome = {
    width:"130rem",
    height: "25rem"    
}
const styleImagenes = {
    width: "80rem",
    height: "15rem",
    paddingTop : 10
}
const styleDiv = {
    padding: 5
}
const Home = () => {
  // const {ObtenerUrlDeHome, urlDeHome} = useContext(GlobalContext);
  // ObtenerUrlDeHome()
  // console.log ("State de: " + urlDeHome)
  return (
    <div style={{overflow: "hidden"}}>

    <div className='row'>
        <div className='col-12'>
        <img src= {home} className="img-fluid mx-auto d-block" style = {styleImagenHome}alt="Responsive image" ></img>
        </div>
        </div>
        <div className='row' style={styleDiv} >
        <div className='col-lg-6'>
       <Link to= {`/componentes-de-pc`}  className="btn btn-outline" > <img src={imagen1}className="img-fluid" style={styleImagenes} alt="Componentes"></img> </Link>
        </div>
        <div className='col-lg-6'  style={{padding: "10",margin:"1000"}}>
        <Link to ={`/Almacenamiento`}  className="btn  btn-outline" ><img src ={imagen2} className="img-fluid" style={styleImagenes} alt="Almacenamiento"></img></Link>
        </div>
    <h1 style={{textAlign: "center"}}> Todos Nuestros productos</h1>
    <hr />
  
    </div>
    <ItemListContainer/>
    </div>
  )
}

export default Home