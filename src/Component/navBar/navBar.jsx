import React, {useContext} from "react";
import { GlobalContext } from '../../context/GlobalProvider';
import Logo from '../../logo.svg';
import CartWidget from "../CartWidget/CartWidget"; //importo el changuito
import {NavLink} from 'react-router-dom';
import navBarItems from '../../JSONS/configNavBar.json'


const cartWidgetStyle = {
   textDecoration: "none",
   color: "black"}

const NavBar = () =>
{
  const {contadorDeProductos} = useContext (GlobalContext)
  //Meto los items de mi navbar en un objeto.

    return (
        <nav className="navbar bg-light  navbar-expand-lg">

    <a className="navbar-brand">
    <img src={Logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">

       {
        //Hago un map de mi array para que me devuelva todo los items.
          navBarItems.route.map(( datoNavbar, inedexNavBar) => (
          <li className="nav-item"  key = {inedexNavBar}>
          <NavLink className="nav-link active" aria-current="page" to = {datoNavbar.to}> {datoNavbar.item}</NavLink>
          </li>
      ))
      }  

      </ul>
    </div>
      {
      contadorDeProductos !== 0 && <NavLink to = "/cart" style={cartWidgetStyle}>  <CartWidget/>  </NavLink>
      }

    </nav>

    )
};

export default NavBar;