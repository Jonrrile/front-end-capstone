import React from "react";
import { Link } from "react-router-dom"
import { DropdownButton } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { ButtonGroup } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import "./NavBar.css"


const NavBar = props => {

    return (
      <header>
        <h1 className="site-title">
          WanderLust
        </h1>
 <Nav  fill variant="tabs" activeKey="/home">
     <ButtonGroup>
       <Nav.Item>
          <Button>
         <Link className="nav-link" to="/home">Home</Link>
         </Button>
        </Nav.Item>
        <Nav.Item>
       <DropdownButton as={ButtonGroup} id="dropdown-basic-button" title="Dropdown">
      <Link className="nav-link" to="/wishlist">Wish List</Link>
      <Link className="nav-link" to="/plannedjourneys">Planned Journeys</Link>
      <Link className="nav-link" to="/completedjourneys">Completed Journeys</Link>
      </DropdownButton>
      </Nav.Item>
       <Nav.Item>
         <Button>
         <Link className="nav-link" to="/blog">Blog</Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
         <Button>
         <Link className="nav-link" to="/gallery">Gallery</Link>
         </Button>
         </Nav.Item>
        <Nav.Item>
         <Button>
         <Link className="nav-link" to="/logout">Logout</Link>
         </Button>
         </Nav.Item>
       </ButtonGroup>
       </Nav>
 </header>
  
    )}
    export default NavBar;