import React from "react";
import logo from '../logo.svg';
import CartWidget from "./CartWidget"; //importo el changuito



const navBar = () =>

{

  //Meto los items de mi navbar en un objeto.
    const navBarItems = [
      { 
        item : "Home",
        href : "#"
      }, 
      { 
        item : "Componentes de PC",
        href : "#"
      }, 
      { 
        item : "Almacenamiento",
        href : "#"
      },
      {
        item : "Combos",
        href : "#"
      },
      {
        item : "Contactanos",
        href : "#"
      }
    ];

    return (
        <nav className="navbar bg-light  navbar-expand-lg">

    <a className="navbar-brand" href="#">
    <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">

      {
        //Hago un map de mi array para que me devuelva todo los items.
          navBarItems.map((datoNavbar) => (
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={datoNavbar.href}> {datoNavbar.item}</a>
          </li>
      ))
      }


      </ul>
    </div>

    <CartWidget/>

    </nav>

    )
};

export default navBar;