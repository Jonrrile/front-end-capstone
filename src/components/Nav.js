import React from "react";
import { Link } from "react-router-dom"

const NavBar = props => {

    return (
 <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="index.html">Wanderlust</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dropdown">Dropdown</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  
    )}
    export default NavBar;