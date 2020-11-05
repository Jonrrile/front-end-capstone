import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import { DropdownButton, NavDropdown } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { ButtonGroup } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import "./NavBar.css"


const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">Wanderlust</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav justify variant="tabs" activeKey="/home">
          {props.hasUser?
          <Nav.Item>
            <Link className="nav-link" to="/home">Home</Link>
          </Nav.Item>
          : null}
          {props.hasUser?
          <NavDropdown title="Journeys" id="nav-dropdown">
            <NavDropdown.Item>
              <Link className="nav-link" to="/wishlist">Wish List</Link>
            </NavDropdown.Item>          
            <NavDropdown.Item>
              <Link className="nav-link" to="/plannedjourneys">Planned Journeys</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/completedjourneys">Completed Journeys</Link>
            </NavDropdown.Item>
          </NavDropdown>
          : null}

            {props.hasUser?
          <Nav.Item>

            <Link className="nav-link" to="/blog">Blog</Link>

          </Nav.Item>
          : null}
          {props.hasUser?

          <Nav.Item>

            <Link className="nav-link" to="/gallery">Gallery</Link>

          </Nav.Item>
          : null}
          {props.hasUser?
          <Nav.Item>

            <Link className="nav-link" onClick={handleLogout} to="/">Logout</Link>

          </Nav.Item>
          :
          
          <Nav.Item>

            <Link className="nav-link" to="/login">Login</Link>

          </Nav.Item>
}
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
export default withRouter(NavBar);