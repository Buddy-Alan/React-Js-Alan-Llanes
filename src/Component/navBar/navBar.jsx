import React, {useContext} from "react";
import { GlobalContext } from '../../context/GlobalProvider';
import Logo from '../Imagenes/logo.png';
import CartWidget from "../CartWidget/CartWidget"; //importo el changuito
import {NavLink} from 'react-router-dom';
import navBarItems from '../../JSONS/configNavBar.json'

const  navBarstyle ={
  backgroundSize: "cover",
  minHeight: "10vh"
}

const ulStyle = {
  padding: 0,
	margin: 0,
	width: "90%"
}

const cartWidgetStyle = {
   textDecoration: "none",
   color: "black",
   width: "10%"
}

const NavBar = () =>
{
  const {contadorDeProductos} = useContext (GlobalContext)
  //Meto los items de mi navbar en un objeto.

    return (
        <nav className="navbar bg-light  navbar-expand-lg" style={navBarstyle}>

    <a className="navbar-brand">
    <img src={Logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav" style={ulStyle}>

       {
        //Hago un map de mi array para que me devuelva todo los items.
          navBarItems.route.map(( datoNavbar, inedexNavBar) => (
          <li className="nav-item"  key = {inedexNavBar}>
          <NavLink className="nav-link active" aria-current="page" to = {datoNavbar.to}> {datoNavbar.item}</NavLink>
          </li>
      ))
      }  

      </ul>
      {
      contadorDeProductos !== 0 && <NavLink to = "/cart" style={cartWidgetStyle}>  <CartWidget/>  </NavLink>
      }

    </div>

    </nav>

    )
};

export default NavBar;