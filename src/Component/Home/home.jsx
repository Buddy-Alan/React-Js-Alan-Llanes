import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import ImgHome from './ImgHome';
const imagenesHome = require.context('../Imagenes/Home', true);


const styleImagenHome = {
    width:"130rem",
    height: "25rem"    
}

const styleDiv = {
    padding: 5
}
const Home = () => {
  const {ObtenerUrlDeHome, urlDeHome} = useContext(GlobalContext);
  if (urlDeHome == undefined || urlDeHome == "" || urlDeHome == null){
  ObtenerUrlDeHome()
  }

  return (
    <div style={{overflow: "hidden"}}>
    <div className='row'>
        <div className='col-12'>
        <img src= {imagenesHome("./home.jpg")} className="img-fluid mx-auto d-block" style = {styleImagenHome}alt="Responsive image" ></img>
        </div>
        </div>
        <div className='row' style={styleDiv} >
        <ImgHome dir ="/componentes-de-pc" img = {imagenesHome("./componentes.jpg")} />
        <ImgHome dir ="/almacenamiento" img = {imagenesHome("./almacenamiento.jpg")} />
        <ImgHome dir ="/perifericos" img = {imagenesHome("./perifericos.jpg")} />
        <ImgHome dir ="/combos" img = {imagenesHome("./combo.jpg")} />
    </div>
    </div>
  )
}

export default Home