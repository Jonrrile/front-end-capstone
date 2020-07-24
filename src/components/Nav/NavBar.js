import React from "react";
import { Link } from "react-router-dom"
import { DropdownButton } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"
import "./NavBar.css"


const NavBar = props => {

    return (
      <header>
        <h1 className="site-title">
          WanderLust
        </h1>
 <nav>
   <div>
     <ul className="container">
       <li className="nav-item">
       <Button variant="primary" size="sm">
         <Link className="nav-link" to="/home">Home</Link>
         </Button>{' '}
       </li>
       <li className="nav-item">
       <DropdownButton id="dropdown-basic-button" title="Dropdown">
      <Link className="nav-link" to="/wishlist">Wish List</Link>
      <Dropdown.Item href="#/action-2">Planned Journeys</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Completed Journeys</Dropdown.Item>
      </DropdownButton>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/blog">Blog</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/gallery">Gallery</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/logout">Logout</Link>
       </li>
     </ul>
   </div>
 </nav>
 </header>
  
    )}
    export default NavBar;