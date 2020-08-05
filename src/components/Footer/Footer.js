import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import "./Footer.css"




const Footer = ()=> {
return (
<Navbar className="footer_container" bg="light" expand="lg">
    <Nav>
        <SocialIcon className="icon" url="https://twitter.com/JonnnyBravo" />
        <SocialIcon className="icon" url="https://www.facebook.com/jonathan.riley.58/" />
        <SocialIcon className="icon" url="https://www.instagram.com/jonathan_riley56/?hl=en" />
        
        <p>&copy; Copyright: Jonathan Riley <a href="https://www.nashvillesoftwareschool.com">Nashville Software School</a></p>
        <SocialIcon url="https://github.com/Jonrrile" />
        <SocialIcon url="https://www.linkedin.com/in/jonathan-r-riley/" />
        <SocialIcon url="https://www.spotify.com/us/account/overview/" />
    </Nav>
    </Navbar>
)}

export default Footer;